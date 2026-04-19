package br.com.bravorun.club.repository;

import br.com.bravorun.club.entity.Athlete;
import br.com.bravorun.club.entity.enums.AthleteStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {

    @Query(nativeQuery = true, value =
            """
            SELECT a.* FROM tb_athlete a 
            INNER JOIN tb_user u ON a.user_id = u.id 
            WHERE a.athlete_status = :status
            """)
    List<Athlete> findAllMinByStatus(String status);
}