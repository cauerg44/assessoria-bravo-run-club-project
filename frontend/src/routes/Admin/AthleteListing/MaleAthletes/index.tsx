import './styles.css';
import { useEffect, useState } from 'react';
import AthleteMinCard from '../../../../components/AthleteMinCard';
import type { AthleteMinDTO } from '../../../../models/athlete-min-dto';
import * as athleteService from '../../../../services/athlete-service.ts';

export default function MaleAthletes() {

  const [athletes, setAthletes] = useState<AthleteMinDTO[]>([]);

  const [athletesQuantity, setAthletesQuantity] = useState<number>();

  useEffect(() => {
    athleteService.findAllMinByStatusAndGender("active", "m")
      .then(
        response => {
          setAthletes(response.data);
          setAthletesQuantity(response.data.length);
        }
      );
  }, [athletes]);

  return (
    <section id="brc-male-athletes-section" className="brc-container-1100">
      <h4>Atletas encontrados: {athletesQuantity}</h4>
      <div className='brc-male-athletes-cards-container'>
        {
          athletes.map(athlete => (
            <AthleteMinCard key={athlete.id} athleteMinDTO={athlete} />
          ))
        }
      </div>
    </section>
  );
}