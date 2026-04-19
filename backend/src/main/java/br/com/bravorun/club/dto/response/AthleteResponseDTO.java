package br.com.bravorun.club.dto.response;

public record AthleteResponseDTO(
        Long id,
        String name,
        String goal,
        String phone,
        String medicalDescription
) {
}
