import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  //defining type
  //@Input decorator exposes the property to the outside world so that 
  //other componenets can access it
  // you can use Input() but if you put anything in () then it will consider as alies
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };
  constructor() { }

  ngOnInit(): void {

  }

}
