import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventComponent } from './event/event.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EventListComponent } from './event-list/event-list.component';
import {MatIconModule} from '@angular/material/icon';

const materialComponents = [
  MatCardModule,
  MatButtonModule,
  MatIconModule

]
@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialComponents
  ],
  exports: [
    ...materialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }