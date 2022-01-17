import { Component, Input, OnInit } from '@angular/core';
import { EventResp, Event } from '../types/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  
  constructor() { }

  ngOnInit(): void {
  }

  voting(upvote) {
    if(upvote) {
        this.event.upvoted = true;
    } else {
      this.event.upvoted = false;
    }
  }

}