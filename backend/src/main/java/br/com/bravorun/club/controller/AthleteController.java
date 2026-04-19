package br.com.bravorun.club.controller;

import br.com.bravorun.club.dto.response.AthleteMinResponseDTO;
import br.com.bravorun.club.entity.enums.AthleteStatus;
import br.com.bravorun.club.services.AthleteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}