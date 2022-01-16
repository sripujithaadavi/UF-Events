import { Component } from '@angular/core';
import { EventResp, Event } from './types/event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mock: Event = {
    header: "Play the fest",
    secheader: "Come play with us",
    desc: "dgfgfgmbfhs gzsfz gzf gzdf gdf zgfdgzsdfdAF dsfvxdfbdfbgxdgfbzf ddgbxdf",
    sampledesc: "this is a sample desc to test how you are going to follow us",
    postedby: "user1",
    postedon: "1/12/2022, 1:30:08 PM",
    price: 100.00,
    category: "gaming",
    address: "RitzUnion, 2nd floor 217",
    imageUrl: "string",
    eventon: "1/12/2022, 1:30:08 PM",
  }
  EventResponse: EventResp = {
    events: [
      {...this.mock},
      {...this.mock},
      {...this.mock},
      {...this.mock},
      {...this.mock},
      {...this.mock},
      {...this.mock},
      {...this.mock},
    ]
  }
}