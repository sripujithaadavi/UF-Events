import { Component, Input, OnInit } from '@angular/core';
import { EventResp, Event } from '../types/event.interface';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: Event;
  upvoted = false;
  userDetails;
  constructor(private router: Router, private eventService: EventsService) { }

  ngOnInit(): void {
    this.eventService.userData.subscribe(res => {this.userDetails = res
      this.upvoted = this.event.LikesList ? this.event.LikesList.includes(""+this.userDetails.ID) : false;
    });
  }

  voting(upvote) {
    if(upvote) {
        this.upvoted = true;
        this.eventService.like({userId: this.userDetails.ID, eventID: this.event.ID, liked: true}).subscribe(res => {});
    } else {
      this.upvoted = false;
      this.eventService.like({userId: this.userDetails.ID, eventID: this.event.ID, liked: false}).subscribe(res => {});;
    }
  }

  navigatetoDetail(event) {
    this.router.navigate(['/event/'+event.ID])
  }

}