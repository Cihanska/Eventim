import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { Event } from "../../models/event";


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  eventForm: FormGroup;
  event?: Event;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.eventForm = this.fb.group({
      id: [null], // Füge die id hinzu
      eventName: [null, [Validators.required, Validators.minLength(1)]],
      date: [null, Validators.required],
      ticketAmount: [null, [Validators.required, Validators.min(0)]],
    });


    const eventId = this.route.snapshot.params['id'];
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe((event) => {
        this.eventForm.patchValue(event);
      });
    }
  }

  saveEvent(): void {
    if (this.eventForm.value.id) {
      this.eventService.updateEvent(this.eventForm.value).subscribe(() => {
        this.router.navigate(['/events']);
      });
    } else {
      this.eventService.saveNewEvent(this.eventForm.value).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }

  ngOnInit(): void {}

}
