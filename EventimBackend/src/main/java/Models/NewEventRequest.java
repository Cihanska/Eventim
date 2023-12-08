package Models;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class NewEventRequest {
    @NotBlank
    private String eventName;

    private LocalDate date;

    private Integer ticketAmount;

    private Double price;

}
