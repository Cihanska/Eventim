package com.example.eventimbackend.controller;

import com.example.eventimbackend.entities.Event;
import com.example.eventimbackend.entities.Ticket;
import com.example.eventimbackend.services.TicketService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("ticket")
@CrossOrigin("http://localhost:4200")
public class TicketController {

    TicketService ticketService;

    @GetMapping
    public ResponseEntity<List<Ticket>> findAllTickets() {return ResponseEntity.ok(ticketService.findAllTicket());}

    @GetMapping("{id}")
    public ResponseEntity<Ticket> findTicketById(@PathVariable Long id) {
        return ResponseEntity.of(ticketService.findTicketById(id));
    }

    @PostMapping
    public ResponseEntity<Ticket> saveNewTicket(@RequestBody Ticket ticket) {
        if(ticket.getId() != null)  {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(ticketService.saveNewTicket(ticket));
    }

    @PutMapping
    public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticket) {
        if(ticket.getId() == null)  {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(ticketService.updateTicket(ticket));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTicketById(@PathVariable Long id) {
        ticketService.deleteTicket(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/buy")
    public ResponseEntity<List<Ticket>> buyTicket(@RequestBody Event event, @RequestParam Integer amount) {
        try {
            List<Ticket> purchasedTickets = ticketService.buyTicket(event, amount);
            return new ResponseEntity<>(purchasedTickets, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
