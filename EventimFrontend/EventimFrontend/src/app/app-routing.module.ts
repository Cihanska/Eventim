import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { EventListComponent } from './components/event-list/event-list.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import {TicketListComponent} from "./components/ticket-list/ticket-list.component";
import {NextEventComponent} from "./next-event/next-event.component";



const routes: Routes = [
  {path: '', redirectTo: '/next', pathMatch: 'full'},
  {path: 'next', component: NextEventComponent},
  {path: 'events', component: EventListComponent},
  {path: 'tickets', component: TicketListComponent},
  {path: 'events/new', component: EventFormComponent},
  {path: 'events/:id', component: EventDetailComponent},
  {path: 'tickets/:id', component: TicketDetailComponent},
  {path: 'events/:id/tickets', component: TicketFormComponent},
  {path: '**', redirectTo: '/next'} // Redirect to next event if the URL doesn't match any route
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
