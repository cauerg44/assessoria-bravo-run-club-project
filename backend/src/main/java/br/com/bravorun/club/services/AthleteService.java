package br.com.bravorun.club.services;

import br.com.bravorun.club.dto.response.AthleteMinResponseDTO;
import br.com.bravorun.club.dto.response.AthleteResponseDTO;
import br.com.bravorun.club.entity.Athlete;
import br.com.bravorun.club.entity.enums.AthleteStatus;
import br.com.bravorun.club.entity.enums.Gender;
import br.com.bravorun.club.repository.AthleteRepository;
import br.com.bravorun.club.services.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AthleteService {

    private final AthleteRepository repository;

    public AthleteService(AthleteRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<AthleteMinResponseDTO> findAllMinByStatusAndGender(String status, String gender) {

        String statusName = AthleteStatus.valueOf(status.toUpperCase()).name();
        String genderEnum = Gender.valueOf(gender.toUpperCase()).name();

        List<Athlete> list = repository.findAllMinByStatusAndGender(statusName, genderEnum);
        return list.stream().map(athlete -> new AthleteMinResponseDTO(athlete)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public AthleteResponseDTO findById(Long id) {
        Athlete athlete = repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Recurso não encontrado"));

        return new AthleteResponseDTO(athlete);
    }
}
