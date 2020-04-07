//service class with all the data

import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

//and corrosponding methods
@Injectable()
export class AccountService {
    
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService){}

      addAcccount ( name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus ( id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}