package Repositories;


import Entities.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface EventRepository extends JpaRepository<Event, Long> {


    Optional<Event> findFirstByDateGreaterThanEqualOrderByDate(LocalDate today);
}
