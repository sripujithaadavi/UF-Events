import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  base = "http://127.0.01:3000/"
  userData: any;
  filterMenuToggled = new BehaviorSubject(false);
  filtersApplied = false;
  applyFilters = new BehaviorSubject({});
  constructor(private http: HttpClient) { }

  getEvent() {
    return this.http.get(this.base+"getevents");
  }

  getEventByID(id: string) {
    return this.http.get(this.base+"getevent/"+id);
  }

  postEvent(data) {
  return this.http.post(this.base+"postevent", data)
  }

  signUpUser(userData) {
    return this.http.post(this.base+'signup', userData);
  }
  signInUser(userData) {
    return this.http.post(this.base+'login', userData);
  }
  setCookies(name, token, time=24*60*60*1000) {
    let d = new Date();
    d.setTime(d.getTime()+(time));
    let expires = "; expires="+d.toUTCString();
    document.cookie = "token="+token+expires+"; path=/"
  }

  getCookie(name='token') {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length >= 2) return parts.pop().split(";").shift();
    return ''
  }

  validateCookie(token) {
    return this.http.post(this.base+'validate', token)
  }
  getUserData() {
    return this.userData;
  }
  setUserData(userData) {
    this.userData = JSON.parse(JSON.stringify(userData));
  }
}
