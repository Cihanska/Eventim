import {Ticket} from "./ticket";

export interface Event {
  id: number;
  eventName: string;
  date?: string; // Datum als Zeichenkette für einfache Darstellung
  ticketAmount?: number;
  tickets?: Ticket[]; // 1:N-Beziehung zu Tickets
}
