import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: '', component: EventListComponent},
  {path: 'create', component: FormComponent},
  {path: 'event:/id', component: EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
