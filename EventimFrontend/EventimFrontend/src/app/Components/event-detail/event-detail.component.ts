import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { TicketService } from '../../services/ticket.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined;
  ticketAmount: number = Math.min(1, this.freeTicketsAmount); // Standardwert für die Anzahl der zu kaufenden Tickets
  maxTicketAmount: number = this.ticketAmount;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private ticketService: TicketService
  ) {}

  get freeTicketsAmount(): number {
    return this.event?.tickets?.filter(ticket => !ticket.isSold).length ?? 0;
  }

  ngOnInit(): void {
    this.loadEventDetails();
  }

  private loadEventDetails(): void {
    const eventId = this.route.snapshot.params['id'];
    this.eventService.getEventById(eventId).subscribe((event) => {
      this.event = event;
    });
  }

  buyTickets(): void {
    if (this.event && this.ticketAmount > 0) {
      this.ticketService.buyTickets(this.event, this.ticketAmount).subscribe(
        (purchasedTickets) => {
          // Erfolg behandeln (z. B. Erfolgsmeldung anzeigen)
          alert(`
Tickets gekauft:
${purchasedTickets.map(ticket => 'Nr. ' + ticket.id + '\n')}
            `);

          // Aktualisiere die Eventdetails nach dem Ticketkauf
          this.loadEventDetails();
        },
        (error) => {
          // Fehler behandeln (z. B. Fehlermeldung anzeigen)
          alert('Fehler beim Kauf von Tickets:');
        }
      );
    }
  }

  onTicketAmountChange(amount: number) {
    if (amount < 0 || amount > this.maxTicketAmount) {
      this.ticketAmount = Math.max(Math.min(amount, this.freeTicketsAmount), 0);
    }
  }
}


