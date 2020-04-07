import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //output direactive is use when we are producing own content and not sending something
  //we are creating the emitter object
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    //emit the object which then open to other object ouside of the current component
    this.serverCreated.emit({serverName: this.newServerName, 
      serveContent: this.newServerContent});
  } 

  onAddBlueprint() {
  
    this.blueprintCreated.emit({serverName:this.newServerName, 
      serveContent: this.newServerContent});
  }

}
