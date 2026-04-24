package br.com.bravorun.club.dto.response;

import br.com.bravorun.club.entity.WeeklyTraining;

import java.time.LocalDate;

public record WeeklyTrainingResponseDTO(
        Long id,
        String athleteName,
        LocalDate startDate,
        LocalDate endDate,
        String goal,
        String description,
        Boolean completed
) {

    public WeeklyTrainingResponseDTO(WeeklyTraining entity) {
        this(
                entity.getId(),
                entity.getAthlete().getUser().getName(),
                entity.getStartDate(),
                entity.getEndDate(),
                entity.getGoal(),
                entity.getDescription(),
                entity.isCompleted()
        );
    }
}