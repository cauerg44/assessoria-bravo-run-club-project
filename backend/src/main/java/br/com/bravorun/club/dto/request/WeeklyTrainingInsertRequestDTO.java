package br.com.bravorun.club.dto.request;

import jakarta.validation.constraints.*;

import java.time.LocalDate;

public record WeeklyTrainingInsertRequestDTO(

        @FutureOrPresent(message = "Data de início deve ser no presente ou futuro")
        @NotNull(message = "A data de início é obrigatória")
        LocalDate startDate,

        @Future(message = "Data de término do treino deve ter futura")
        @NotNull(message = "A data de término é obrigatória")
        LocalDate endDate,

        @Size(max = 100, message = "O objetivo deve ter no máximo 100 caracteres")
        String goal,

        @NotBlank(message = "A descrição do treino é obrigatória")
        String description
) {
}