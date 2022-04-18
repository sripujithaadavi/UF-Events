import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private eventsService: EventsService, private router: Router) { }
  userDetails: any;
  showFilter = false;
  ngOnInit(): void {
    this.userDetails = this.eventsService.getUserData();
    console.log(this.userDetails);
  }
  navigateTo(url) {
    this.router.navigate(['/'+url]);
  }
  filterChange() {
    this.showFilter = !this.showFilter;
    this.eventsService.filterMenuToggled.next(this.showFilter);
  }
  logout() {
    this.eventsService.setCookies('token', '', 0);
    this.eventsService.setCookies('userInfo', '', 0);
    this.router.navigate(['/']);
  }

}
