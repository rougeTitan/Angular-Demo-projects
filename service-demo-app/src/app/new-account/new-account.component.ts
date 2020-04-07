import { Component, EventEmitter, Output } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  //adding provider for the service
  //providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  //approch 2 - using injector - it give us the instace of the service
  //you need to add providers in the @component with your service type
  //here in this case - LoggingService
  constructor (private loggingService: LoggingService,
     private accountService: AccountService){
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    
    //we no longer needed this since we are not emitting the events
    /*
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    */
   
    // accseeing service method with approch 2
    //this.loggingService.logStatusChange(accountStatus);
    this.accountService.addAcccount(accountName, accountStatus);
   
    /*
    //approch 1 - creating an instance of a service
    const service = new LoggingService();
    //calling the service method
    service.logStatusChange(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  */
  }
}
