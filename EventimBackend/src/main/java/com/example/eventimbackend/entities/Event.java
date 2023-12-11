package com.example.eventimbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class Event {

    @Id
    @GeneratedValue
    private Long id;

    private String eventName;

    private LocalDate date;

    private Integer ticketAmount;

    @OneToMany(mappedBy = "event")
    @JsonIgnoreProperties("event")
    private List<Ticket> tickets;

}
