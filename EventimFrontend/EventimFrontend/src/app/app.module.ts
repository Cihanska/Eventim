import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



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
