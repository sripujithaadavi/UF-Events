import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  base = "http://127.0.01:3000/"
  constructor(private http: HttpClient) { }

  getEvent() {
    return this.http.get(this.base+"getevents");
  }

  postEvent(data) {
  return this.http.post(this.base+"postevent", data)
  }
}
