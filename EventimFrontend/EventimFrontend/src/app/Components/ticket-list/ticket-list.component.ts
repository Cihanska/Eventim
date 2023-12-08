import {Component} from '@angular/core';
import {Ticket} from '../../models/ticket';
import {TicketService} from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  tickets: Ticket[] = [];
  searchTerm: string = "";

  constructor(private ticketService: TicketService) {
    this.ticketService.getAllTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

  deleteTicket(ticketId: number): void {
    this.ticketService.deleteTicket(ticketId).subscribe(() => {
      this.tickets = this.tickets.filter(ticket => ticket.id !== ticketId);
    });
  }

  get filteredTickets() {
    return this.tickets.filter(ticket => ticket.event.eventName.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }
}

