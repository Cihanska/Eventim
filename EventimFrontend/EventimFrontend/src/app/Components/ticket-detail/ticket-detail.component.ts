import {Component, OnInit} from '@angular/core';
import {Ticket} from "../../models/ticket";
import {ActivatedRoute} from "@angular/router";
import {TicketService} from "../../services/ticket.service";

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket: Ticket | undefined;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService
  ) {
  }



  ngOnInit(): void {
    const ticketId = this.route.snapshot.params['id'];
    if (ticketId) {
      this.ticketService.getTicketById(ticketId).subscribe((ticket) => {
        this.ticket = ticket;
      });
    }
  }
}
