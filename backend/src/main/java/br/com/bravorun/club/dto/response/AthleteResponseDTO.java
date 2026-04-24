package br.com.bravorun.club.dto.response;

import br.com.bravorun.club.entity.Athlete;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public record AthleteResponseDTO(
        Long id,
        String name,
        @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
        LocalDate birthDate,
        String goal,
        String phone,
        String medicalObservations
) {
        public AthleteResponseDTO(Athlete athlete) {
                this(
                        athlete.getId(),
                        athlete.getUser().getName(),
                        athlete.getUser().getBirthDate(),
                        athlete.getGoal(),
                        athlete.getPhone(),
                        athlete.getMedicalObservations()
                );
        }
}
