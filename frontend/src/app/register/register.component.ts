import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.required]),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
  });
  constructor(private eventsService: EventsService, private router: Router) { }
  ngOnInit(): void {
  }
  signup() {
    this.eventsService.signUpUser(this.signUpForm.value).subscribe(res => {
        this.router.navigate(['/']);
    });
  }

}
