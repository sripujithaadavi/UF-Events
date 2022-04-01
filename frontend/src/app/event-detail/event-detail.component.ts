import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';
import { Event } from '../types/event.interface';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  id: string;
  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.getProduct();
  }

  getProduct() {
    this.eventsService.getEventByID(this.id).subscribe((res: Event ) => {
      this.event = res;
    })
  }

}
