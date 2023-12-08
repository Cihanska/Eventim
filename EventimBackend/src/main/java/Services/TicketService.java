package Services;

import Entities.Event;
import Entities.Ticket;
import Repositories.EventRepository;
import Repositories.TicketRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TicketService {
    private TicketRepository ticketRepository;
    private EventRepository eventRepository;

    public List<Ticket> findAllTicket() {
        return ticketRepository.findAll();
    }

    public Optional<Ticket> findTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public Ticket saveNewTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public List<Ticket> buyTicket(Event event, Integer amount) {
        List<Ticket> ticketAvailable = ticketRepository.findAllByEventAndIsSold(event, false);
        if (ticketAvailable.size() >= amount) {
            List<Ticket> ticketsToBuy = ticketAvailable.stream().limit(amount).collect(Collectors.toList());
            for (Ticket ticket : ticketsToBuy) {
                ticket.setIsSold(true);
                ticketRepository.save(ticket);
            }
            return ticketsToBuy;
        } else {
            return new ArrayList<>();
        }
    }

    public Ticket updateTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public void deleteTicket(Long id) {
// Ticket aus der DB holen
        Ticket ticket = ticketRepository.findById(id).orElse(null);
        if (ticket != null) {
// Ticket aus der DB löschen
            ticketRepository.deleteById(id);
// Lade aus meiner DB ein Event, was zu diesem Ticket gehört
            Long eventId = ticket.getEvent().getId();
            Optional<Event> event = eventRepository.findById(eventId);
            if (event.isPresent()) {
// Aus diesem Event das Feld Amount - 1
                int currentAmount = event.get().getTicketAmount();
                if (currentAmount > 0) {
                    event.get().setTicketAmount(currentAmount - 1);
// Event speichern
                    eventRepository.save(event.get());
                }
            }
        }
    }
}
