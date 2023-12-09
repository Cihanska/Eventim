import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {EventListComponent} from "./Components/event-list/event-list.component";
import {TicketListComponent} from "./Components/ticket-list/ticket-list.component";
import {EventDetailComponent} from "./Components/event-detail/event-detail.component";
import {TicketDetailComponent} from "./Components/ticket-detail/ticket-detail.component";
import {EventFormComponent} from "./Components/event-form/event-form.component";
import {TicketFormComponent} from "./Components/ticket-form/ticket-form.component";
import {TicketFormItemComponent} from "./Components/ticket-form-item/ticket-form-item.component";
import {NextEventComponent} from "./next-event/next-event.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    TicketListComponent,
    EventDetailComponent,
    TicketDetailComponent,
    EventFormComponent,
    TicketFormComponent,
    TicketFormItemComponent,
    NextEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
