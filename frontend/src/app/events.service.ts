import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  base = "http://127.0.01:3000/"
  userData: any;
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
  setCookies(token) {
    let d = new Date();
    d.setTime(d.getTime()+(24*60*60*1000));
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
