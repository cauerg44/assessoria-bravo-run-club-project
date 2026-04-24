package br.com.bravorun.club.controller;

import br.com.bravorun.club.dto.request.WeeklyTrainingInsertRequestDTO;
import br.com.bravorun.club.dto.response.WeeklyTrainingResponseDTO;
import br.com.bravorun.club.services.WeeklyTrainingService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "v1/trainings")
public class WeeklyTrainingController {

    private final WeeklyTrainingService service;

    public WeeklyTrainingController(WeeklyTrainingService service) {
        this.service = service;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<WeeklyTrainingResponseDTO> findTrainingById(@PathVariable Long id) {
        var weeklyTraining = service.findById(id);
        return ResponseEntity.ok().body(weeklyTraining);
    }

    @PostMapping(value = "/{athleteId}")
    public ResponseEntity<WeeklyTrainingResponseDTO> saveNewWeeklyTraining(@PathVariable Long athleteId, @Valid @RequestBody WeeklyTrainingInsertRequestDTO request) {
        var newWeeklyTraining = service.insert(athleteId, request);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newWeeklyTraining.id()).toUri();
        return ResponseEntity.created(uri).body(newWeeklyTraining);
    }
}