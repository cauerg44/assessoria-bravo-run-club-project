import './styles.css';
import AthleteMinCard from "../../../../components/AthleteMinCard";
import { useEffect, useState } from 'react';
import type { AthleteMinDTO } from '../../../../models/athlete-min-dto';
import * as athleteService from '../../../../services/athlete-service.ts';

export default function FemaleAthletes() {

  const [athletes, setAthletes] = useState<AthleteMinDTO[]>([]);

  const [athletesQuantity, setAthletesQuantity] = useState<number>();

  useEffect(() => {
    athleteService.findAllMinByStatusAndGender("active", "f")
      .then(
        response => {
          setAthletes(response.data);
          setAthletesQuantity(response.data.length);
        }
      );
  }, [athletes]);

  return (
    <section id="brc-female-athletes-section" className="brc-container-1100">
      <h4>Atletas encontradas: {athletesQuantity}</h4>
      <div className='brc-female-athletes-cards-container'>
        {
          athletes.map(athlete => (
            <AthleteMinCard key={athlete.id} athleteMinDTO={athlete} />
          ))
        }
      </div>
    </section>
  );
}