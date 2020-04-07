import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Key } from 'protractor';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostsService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    //subscribing to the error subject
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    });
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  //get the form data
  onCreatePost(postData: { title: string; content: string }) {
    //moving http call to service file
    this.postsService.createAndStorePost(postData.title, postData.content);

    /*
    // Send Http request
    this.http
    //put your firebase url here
    //postdata - is a request body i.e data that you want to send throuhg the request
    .post<{ name: string }>(
        'https://http-demo-app-2aec2.firebaseio.com/posts.json',
        postData
      )
      //this step is very important to send the request
      //without subscribing to the observer sent by post you wont be able to send the request
      //you dont need to unsubscribe it as it gets completed once the job is done

      .subscribe(responseData => {
        console.log(responseData);
      });
      */
  }

  onFetchPosts(){
     // Send Http request
     this.isFetching = true;
     this.postsService.fetchPosts().subscribe(
       posts => {
         this.isFetching = false;
         this.loadedPosts = posts;
       },
       error => {
         this.isFetching = false;
         this.error = error.message;
         console.log(error);
       }
     );
  }

  //no longer needed
  /*
   private fetchPosts() {
    this.isFetching = true;
    // Send Http get request
    this.http
   .get<{ [key: string]: Post }>(
        'https://http-demo-app-2aec2.firebaseio.com/posts.json'
      ).pipe(map(responseData => {
        const postArray = [];
        for (const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postArray.push({ ...responseData[key], id: key });
          } 
        }
        return postArray;
      })).subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      });
  }
  */

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
