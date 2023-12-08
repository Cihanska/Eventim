import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ticket} from "../../models/ticket";
import {EventService} from "../../services/event.service";
import {TicketService} from "../../services/ticket.service";
import {Input} from "@angular/core";

@Component({
  selector: 'app-ticket-form-item',
  templateUrl: './ticket-form-item.component.html',
  styleUrls: ['./ticket-form-item.component.css']
})
export class TicketFormItemComponent implements OnInit {
  ticketForm: FormGroup;

  @Input()
  ticket!: Ticket;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
  ) {


    this.ticketForm = this.fb.group({
      id: [null], // Füge die id hinzu
      price: [null, [Validators.required, Validators.min(0)]],
      isSold: [false, Validators.required], // Standardwert für isSold setzen
      event: [null], // Füge event hinzu (wenn es in deinem Formular verwendet wird)
    });


  }

  saveTicket(): void {
    this.ticketService.updateTicket(this.ticketForm.value).subscribe();
  }

  ngOnInit(): void {
    this.ticketForm.patchValue(this.ticket);
  }
}
