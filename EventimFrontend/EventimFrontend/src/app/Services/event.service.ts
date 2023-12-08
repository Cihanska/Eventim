import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Event } from "../models/event";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  apiUrl = "http://localhost:4200/event"

  constructor(private httpClient: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>(this.apiUrl);
  }

  getEventById(id: number): Observable<Event> {
    return this.httpClient.get<Event>(`${this.apiUrl}/${id}`);
  }

  saveNewEvent(newEvent: Event): Observable<Event> {
    return this.httpClient.post<Event>(this.apiUrl, newEvent);
  }

  updateEvent(event: Event): Observable<Event> {
    return this.httpClient.put<Event>(`${this.apiUrl}/event`, event);
  }

  deleteEvent(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }

  getNextEvent(): Observable<Event | undefined> {
    return this.httpClient.get<Event | undefined>(`${this.apiUrl}/next`);
  }
}
