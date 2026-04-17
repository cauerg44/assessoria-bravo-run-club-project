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

    @Enumerated(EnumType.STRING)
    private AthleteStatus athleteStatus;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String medicalObservations;

    @OneToMany(mappedBy = "athlete")
    private List<WeeklyTraining> workouts = new ArrayList<>();

    @OneToMany(mappedBy = "athlete")
    private List<Payment> payments = new ArrayList<>();

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private User user;

    public Athlete() {
    }

    public Athlete(Long id, String phone, AthleteStatus athleteStatus, String medicalObservations, User user) {
        this.id = id;
        this.phone = phone;
        this.athleteStatus = athleteStatus;
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

    public AthleteStatus getStatus() {
        return athleteStatus;
    }

    public void setStatus(AthleteStatus status) {
        this.athleteStatus = status;
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
        workout.setAthlete(this);
    }

    public void removeWorkout(WeeklyTraining workout) {
        this.workouts.remove(workout);
        workout.setAthlete(this);
    }

    public List<Payment> getPayments() {
        return payments;
    }

    public void addPayment(Payment payment) {
        this.payments.add(payment);
        payment.setAthlete(this);
    }

    public void removePayment(Payment payment) {
        this.payments.remove(payment);
        payment.setAthlete(this);
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