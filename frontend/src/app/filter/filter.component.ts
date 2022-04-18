import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  sortBy = ['date', 'price']
  filterForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    eventBefore: new FormControl(new Date()),
    eventAfter: new FormControl(new Date(new Date().getTime()+(180*24*60*60*1000))),
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
  }
  clearFilters() {
    this.eventsService.filtersApplied = false;
    const clearedFilters = {name: "", eventBefore: new Date(new Date().getTime()+(180*24*60*60*1000)), eventAfter: new Date(), sortBy: "", priceStart: "0", priceEnd: "1000", category: ""}
    this.eventsService.applyFilters.next({...clearedFilters});
    this.filterForm.setValue({...clearedFilters});
  }

}
