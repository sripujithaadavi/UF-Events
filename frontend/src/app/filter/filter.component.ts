import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  sortBy = ['likes', 'price']
  filterForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    eventBefore: new FormControl(new Date(new Date().getTime()+(180*24*60*60*1000))),
    eventAfter: new FormControl(new Date(new Date().getTime()-(180*24*60*60*1000))),
    sortBy: new FormControl(""),
    priceStart: new FormControl("0"),
    priceEnd: new FormControl("1000"),
    category: new FormControl(""),
  });
  constructor(private eventsService: EventsService, private router: Router) { }
  ngOnInit(): void {
    if(this.eventsService.filtersApplied) {
      const filterData = this.eventsService.applyFilters.value
      this.filterForm.setValue({...filterData, price: filterData['price']['price'] || filterData['price'], age: filterData['age']['age'] || filterData['age']});
    }
  }

  applyFilters() {
    this.eventsService.filtersApplied = true;
    this.eventsService.applyFilters.next(this.filterForm.value);
    this.filterEvents();
  }

  filterEvents() {
    const filterFormValues = this.filterForm.value;
    const events = [...this.eventsService.events.value];

    const dateFiltered = events.filter(event => {
      
      let time = new Date(event.eventon).getTime();
      const val = time > new Date(filterFormValues.eventAfter).getTime() && time < new Date(filterFormValues.eventBefore).getTime()
      return val;
    });


    let filteredEvents: any[] = dateFiltered.filter(event => {
      return (filterFormValues.priceStart < event.price && event.price < filterFormValues.priceEnd)
    });

    if (filterFormValues.name) {
      filteredEvents = filteredEvents.filter(event => {
        return event.header.includes(filterFormValues.name)
      });
    }


    // Sorting
    if (filterFormValues.sortBy === 'price') {
      filteredEvents.sort((a, b) => a.price-b.price);
    } else {
      filteredEvents.sort((a, b) => b.likes-a.likes);
    }



    this.eventsService.filteredEvents.next([...filteredEvents]);
  }
  clearFilters() {
    this.eventsService.filtersApplied = false;
    const clearedFilters = {name: "", eventBefore: new Date(new Date().getTime()+(180*24*60*60*1000)), eventAfter: new Date(new Date().getTime()-(180*24*60*60*1000)), sortBy: "likes", priceStart: "0", priceEnd: "1000", category: ""}
    this.eventsService.applyFilters.next({...clearedFilters});
    this.filterForm.setValue({...clearedFilters});
    this.eventsService.filteredEvents.next(this.eventsService.events.value);
  }

}
