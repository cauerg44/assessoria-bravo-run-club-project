package br.com.bravorun.club.dto.response;

import br.com.bravorun.club.entity.Athlete;
import br.com.bravorun.club.entity.WeeklyTraining;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public record AthleteMinResponseDTO(
        Long id,
        String name,

        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
        LocalDate birthDate,

        String goal
) {
        public AthleteMinResponseDTO(Athlete entity) {
                this(
                        entity.getId(),
                        entity.getUser().getName(),
                        entity.getUser().getBirthDate(),
                        entity.getGoal()
                );
        }
}
