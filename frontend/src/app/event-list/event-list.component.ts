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
  events = [];
  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEvents();
    this.eventsService.filterMenuToggled.subscribe(res => {
      this.showFilter = res;
    });

    this.eventsService.filteredEvents.subscribe((res: any) => {
      this.events = [...res];
    })
  }

  fetchEvents() {
      this.eventsService.getEvent().subscribe((res: any[]) => {
        this.eventsService.events.next([...res]);
        this.eventsService.filteredEvents.next([...res]);
      });
  }

}