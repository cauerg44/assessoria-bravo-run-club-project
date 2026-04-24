package br.com.bravorun.club.repository;

import br.com.bravorun.club.entity.WeeklyTraining;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeeklyTrainingRepository extends JpaRepository<WeeklyTraining, Long> {
}