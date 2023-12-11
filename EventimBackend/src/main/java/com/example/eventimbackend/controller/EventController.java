package com.example.eventimbackend.controller;

import com.example.eventimbackend.entities.Event;
import com.example.eventimbackend.models.NewEventRequest;
import com.example.eventimbackend.services.EventService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("event")
@CrossOrigin("http://localhost:4200")
public class EventController {

    EventService eventService;

    @GetMapping
    public ResponseEntity<List<Event>> findAllEvents() {return ResponseEntity.ok(eventService.findAllEvents());}

    @GetMapping("{id}")
    public ResponseEntity<Event> findEventById(@PathVariable Long id) {
        return ResponseEntity.of(eventService.findEventById(id));
    }

    @GetMapping("next")
    public ResponseEntity<Event> findNextEvent() {
        return ResponseEntity.of(eventService.findNextEvent());
    }

    @PostMapping
    public ResponseEntity<Event> saveNewEvent(@RequestBody NewEventRequest newEventRequest) {

        return ResponseEntity.ok(eventService.saveNewEvent(newEventRequest));
    }



    @PutMapping
    public ResponseEntity<Event> updateEvent(@RequestBody Event event) {

        if (event.getId() == null)  {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(eventService.updateEvent(event));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        eventService.deleteEvent(id);
        return ResponseEntity.ok().build();
    }


}
