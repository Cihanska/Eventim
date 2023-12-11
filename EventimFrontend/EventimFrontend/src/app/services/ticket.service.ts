import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Ticket } from "../models/ticket";
import {Event} from "../models/event";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  apiUrl = "http://localhost:8080/ticket"

  constructor(private httpClient: HttpClient) { }


  getAllTickets(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.apiUrl);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(`${this.apiUrl}/${id}`);
  }


  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.put<Ticket>(this.apiUrl, ticket);
  }

  buyTickets(event: Event, amount: number): Observable<Ticket[]> {
    const params = new HttpParams().set('amount', amount.toString());

    return this.httpClient.post<Ticket[]>(`${this.apiUrl}/buy`, event, { params });
  }

  deleteTicket(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
