package com.example.eventimbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Ticket {

    @Id
    @GeneratedValue
    private Long id;

    private Double price;

    private Boolean isSold;

    @ManyToOne
    @JsonIgnoreProperties("tickets")
    private Event event;

}
