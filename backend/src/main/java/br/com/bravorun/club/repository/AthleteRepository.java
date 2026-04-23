package br.com.bravorun.club.repository;

import br.com.bravorun.club.entity.Athlete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AthleteRepository extends JpaRepository<Athlete, Long> {

    @Query(nativeQuery = true, value =
            """
            SELECT a.* FROM tb_athlete a 
            INNER JOIN tb_user u ON a.user_id = u.id 
            WHERE a.athlete_status = :status AND u.gender = :gender
            """)
    List<Athlete> findAllMinByStatusAndGender(String status, String gender);

    @Query(nativeQuery = true, value =
            """
            SELECT a.* FROM tb_athlete a 
            INNER JOIN tb_user u ON a.user_id = u.id
            WHERE a.user_id = :id
            """)
    Optional<Athlete> findById(Long id);
}