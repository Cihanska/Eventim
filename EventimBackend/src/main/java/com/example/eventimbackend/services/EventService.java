package com.example.eventimbackend.services;

import com.example.eventimbackend.entities.Event;
import com.example.eventimbackend.entities.Ticket;
import com.example.eventimbackend.models.NewEventRequest;
import com.example.eventimbackend.repositories.EventRepository;
import com.example.eventimbackend.repositories.TicketRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EventService {

    private EventRepository eventRepository;
    private TicketRepository ticketRepository;


    public List<Event> findAllEvents() {return eventRepository.findAll();}

    public Optional<Event> findEventById(Long id) {return eventRepository.findById(id);}

    public Event saveNewEvent(NewEventRequest newEventRequest) {
        Event newEvent = new Event();
        newEvent.setEventName(newEventRequest.getEventName());
        newEvent.setDate(newEventRequest.getDate());
        newEvent.setTicketAmount(newEventRequest.getTicketAmount());

        Event savedEvent = eventRepository.save(newEvent);

        for(int i=0; i<newEvent.getTicketAmount();i++) {

            Ticket ticket = new Ticket();
            ticket.setEvent(savedEvent);
            ticket.setPrice(newEventRequest.getPrice());
            ticket.setIsSold(false);

            ticketRepository.save(ticket);
        }

        return savedEvent;
    }

    public Event updateEvent(Event event) {return eventRepository.save(event);}

    public Optional<Event> findNextEvent(){
        return eventRepository.findFirstByDateGreaterThanEqualOrderByDate(LocalDate.now());
    }

    @Transactional
    public void deleteEvent(Long id) {
        ticketRepository.deleteAllByEventId(id);
        eventRepository.deleteById(id);
    }


}

