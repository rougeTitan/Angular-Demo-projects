import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //server element array with dummy data
  //using normal js syntax here
  serverElements = [{
    type: 'server',
    name: 'testserver',
    content: 'just a test!'
  }];
  
  //in following methods servername and servercontent data should be 
  // recieved from cockpit i.e binding custom event
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePpintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePpintData.serverName,
      content: bluePpintData.serverContent
    });
  }


}
