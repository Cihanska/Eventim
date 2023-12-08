// event-list.component.ts

import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent {
  events: Event[] = [];
  searchTerm: string = "";

  constructor(private eventService: EventService) {
    eventService.getAllEvents().subscribe(events => {
      this.events = events;
    })
  }


  deleteEvent(id?: number): void {
    if (id) {
      this.eventService.deleteEvent(id).subscribe(() => {
        this.events = this.events.filter(event => event.id !== id)
      })
    }
  }

  get filteredEvents() {
    return this.events.filter(event =>
      event.eventName.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }
}




