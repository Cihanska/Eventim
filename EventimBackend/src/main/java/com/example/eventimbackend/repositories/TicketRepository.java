package com.example.eventimbackend.repositories;

import com.example.eventimbackend.entities.Event;
import com.example.eventimbackend.entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findAllByEventAndIsSold(Event event, Boolean isSold);

    void deleteAllByEventId(Long id);
}
