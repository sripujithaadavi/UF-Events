import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create', component: FormComponent},
  {path: 'event/:id', component: EventDetailComponent},
  {path: 'events', component: EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
