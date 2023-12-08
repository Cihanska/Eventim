import {Event} from "./event";

export interface Ticket {
  id: number;
  price: number;
  isSold: boolean;
  event: Event; // N:1-Beziehung zu Events
}
