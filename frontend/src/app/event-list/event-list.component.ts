import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { EventResp, Event } from '../types/event.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  showFilter = false;
  EventResponse: EventResp = {
    events: []
  }
  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEvents();
    this.eventsService.filterMenuToggled.subscribe(res => {
      this.showFilter = res;
    })
  }

  fetchEvents() {
    this.eventsService.getEvent().subscribe((res: any[]) => {
      this.EventResponse.events = [...res] 
    });
  }


  navigatetoDetail(event) {
    this.router.navigate(['/event/'+event.ID])
  }

}