import { Component, OnInit } from '@angular/core';
import { EventService} from "../services/event.service";
import { Event} from "../models/event";

@Component({
  selector: 'app-next-event',
  templateUrl: './next-event.component.html',
  styleUrls: ['./next-event.component.css']
})
export class NextEventComponent implements OnInit {
  nextEvent: Event | undefined;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadNextEvent();
  }

  private loadNextEvent(): void {
    this.eventService.getNextEvent().subscribe((nextEvent) => {
      this.nextEvent = nextEvent;
    });
  }
}
