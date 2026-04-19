package br.com.bravorun.club.controller;

import br.com.bravorun.club.dto.response.AthleteMinResponseDTO;
import br.com.bravorun.club.dto.response.AthleteResponseDTO;
import br.com.bravorun.club.services.AthleteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "v1/athletes")
public class AthleteController {

    private final AthleteService service;

    public AthleteController(AthleteService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<AthleteMinResponseDTO>> findAllAthletesMinByStatus(@RequestParam String status) {
        var athletes = service.findAllMinByStatus(status);
        return ResponseEntity.ok().body(athletes);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<AthleteResponseDTO> findAthleteById(@PathVariable Long id) {
        var athlete = service.findById(id);
        return ResponseEntity.ok().body(athlete);
    }
}