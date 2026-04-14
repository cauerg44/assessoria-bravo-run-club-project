package br.com.bravorun.club.entity;

import br.com.bravorun.club.entity.enums.AthleteStatus;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_athlete")
public class Athlete {

    @Id
    private Long id;

    @Column(unique = true)
    private String phone;

    @Column(nullable = false)
    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private AthleteStatus status;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String medicalObservations;

    @OneToMany(mappedBy = "athlete")
    private List<WeeklyTraining> workouts = new ArrayList<>();

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    public Athlete() {
    }

    public Athlete(Long id, String phone, LocalDate birthDate, AthleteStatus status, String medicalObservations, User user) {
        this.id = id;
        this.phone = phone;
        this.birthDate = birthDate;
        this.status = status;
        this.medicalObservations = medicalObservations;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public AthleteStatus getStatus() {
        return status;
    }

    public void setStatus(AthleteStatus status) {
        this.status = status;
    }

    public String getMedicalObservations() {
        return medicalObservations;
    }

    public void setMedicalObservations(String medicalObservations) {
        this.medicalObservations = medicalObservations;
    }

    public List<WeeklyTraining> getWorkouts() {
        return workouts;
    }

    public void addWorkout(WeeklyTraining workout) {
        this.workouts.add(workout);
    }

    public void removeWorkout(WeeklyTraining workout) {
        this.workouts.remove(workout);
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Athlete athlete = (Athlete) o;
        return Objects.equals(id, athlete.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}