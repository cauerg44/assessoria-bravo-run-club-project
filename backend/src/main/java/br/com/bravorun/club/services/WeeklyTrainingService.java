package br.com.bravorun.club.services;

import br.com.bravorun.club.dto.request.WeeklyTrainingInsertRequestDTO;
import br.com.bravorun.club.dto.response.WeeklyTrainingResponseDTO;
import br.com.bravorun.club.entity.Athlete;
import br.com.bravorun.club.entity.WeeklyTraining;
import br.com.bravorun.club.repository.AthleteRepository;
import br.com.bravorun.club.repository.WeeklyTrainingRepository;
import br.com.bravorun.club.services.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WeeklyTrainingService {

    private final WeeklyTrainingRepository repository;
    private final AthleteRepository athleteRepository;

    public WeeklyTrainingService(WeeklyTrainingRepository repository, AthleteRepository athleteRepository) {
        this.repository = repository;
        this.athleteRepository = athleteRepository;
    }

    @Transactional(readOnly = true)
    public WeeklyTrainingResponseDTO findById(Long id) {
        WeeklyTraining weeklyTraining = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Treino não encontado com id: " + id));

        return new WeeklyTrainingResponseDTO(weeklyTraining);
    }

    @Transactional
    public WeeklyTrainingResponseDTO insert(Long athleteId, WeeklyTrainingInsertRequestDTO dto) {

        if (!athleteRepository.existsById(athleteId)) {
            throw new ResourceNotFoundException("Atleta não encontrado com o id: " + athleteId);
        }

        WeeklyTraining entity = new WeeklyTraining();
        copyDtoToEntity(dto, entity);

        Athlete athlete = athleteRepository.getReferenceById(athleteId);
        entity.setAthlete(athlete);

        entity = repository.save(entity);

        return new WeeklyTrainingResponseDTO(entity);
    }

    private void copyDtoToEntity(WeeklyTrainingInsertRequestDTO dto, WeeklyTraining entity) {
        entity.setStartDate(dto.startDate());
        entity.setEndDate(dto.endDate());
        entity.setGoal(dto.goal());
        entity.setDescription(dto.description());
        entity.setCompleted(false);
    }
}