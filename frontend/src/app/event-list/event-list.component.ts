import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EventResp, Event } from '../types/event.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  mock: Event = {
    header: "Play the fest",
    secheader: "Come play with us",
    desc: "dgfgfgmbfhs gzsfz gzf gzdf gdf zgfdgzsdfdAF dsfvxdfbdfbgxdgfbzf ddgbxdf",
    sampledesc: "this is a sample desc to test how you are going to follow us",
    postedby: "user1",
    postedon: "1/12/2022, 1:30:08 PM",
    price: 100.00,
    category: "gaming",
    address: "ReitzUnion, 2nd floor 217",
    imageUrl: "string",
    eventon: "1/12/2022, 1:30:08 PM",
    upvoted: true
  }
  EventResponse: EventResp = {
    events: []
  }
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents() {
    this.eventsService.getEvent().subscribe((res: any[]) => {
      this.EventResponse.events = [...res] 
    });
  }

}
