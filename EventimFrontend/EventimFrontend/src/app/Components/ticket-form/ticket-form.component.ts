import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from "../../models/ticket";
import {EventService} from "../../services/event.service";



@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {

  tickets : Ticket[] = [];

  constructor(
    private eventService: EventService,
    private fb: FormBuilder,
    private ticketService: TicketService,
    private route: ActivatedRoute,
  ) {
    const eventId = this.route.snapshot.params['id'];
    if(eventId){
      this.eventService.getEventById(eventId).subscribe(event => {
        this.tickets = event.tickets?.map(ticket => {
          ticket.event = event;
          return ticket
        }) ?? []
      });

    }

  }

}
