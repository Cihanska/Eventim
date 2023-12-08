package Repositories;

import Entities.Event;
import Entities.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Long> {

    List<Ticket> findAllByEventAndIsSold(Event event, Boolean isSold);

    void deleteAllByEventId(Long id);
}
