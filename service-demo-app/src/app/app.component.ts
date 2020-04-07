import { Component } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //adding provider for service
})
export class AppComponent {
  accounts: {name:string,status:string}[]=[];
  //all the data elements has been removed and putted in the 
  // account service

  //service injector using constructor
  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}

