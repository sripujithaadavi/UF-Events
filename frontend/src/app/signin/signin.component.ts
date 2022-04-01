import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  token: string;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.email]),
    password: new FormControl("", [Validators.required])
  });
  constructor(private eventsService: EventsService, private router: Router) { }
  ngOnInit(): void {
    // this.checkCookies();
  }
  checkCookies() {
    this.token = this.eventsService.getCookie();
    this.eventsService.validateCookie({token: this.token}).subscribe(res => {
    });
  }
  login() {
    this.eventsService.signInUser(this.loginForm.value).subscribe((res: any) => {
      this.eventsService.setCookies(res.token);
      this.router.navigate(['/events']);
  });
  }
}
