import { useEffect, useState } from 'react';
import AthleteMinCard from '../../../../components/AthleteMinCard';
import './styles.css';
import axios from 'axios';
import type { AthleteMinDTO } from '../../../../models/athlete-min-dto';

export default function MaleAthletes() {

  const [athletes, setAthletes] = useState<AthleteMinDTO[]>([]);

  const [athletesQuantity, setAthletesQuantity] = useState<number>();

  useEffect(() => {
    axios.get("http://localhost:8080/v1/athletes?status=active&gender=m")
      .then(
        response => {
          console.log(response.data);
          setAthletes(response.data);
          setAthletesQuantity(response.data.length);
        }
      );
  }, []);

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