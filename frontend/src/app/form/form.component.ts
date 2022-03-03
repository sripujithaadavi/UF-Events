import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  eventDetails: FormGroup = new FormGroup({
    header: new FormControl("", [Validators.required]),
    secheader: new FormControl("", [Validators.required]),
    desc: new FormControl("", [Validators.required]),
    sampledesc: new FormControl("", [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    category: new FormControl("", [Validators.required]),
    address: new FormControl("", [Validators.required]),
    eventon: new FormControl("", [Validators.required])
  });
  constructor(private eventsService: EventsService, private router: Router) { }
  ngOnInit(): void {
  }
  postEvent() {
    this.eventsService.postEvent({...this.eventDetails.value, price: +this.eventDetails.value.price}).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}