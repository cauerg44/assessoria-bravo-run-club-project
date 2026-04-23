import './styles.css';
import AthleteMinCard from "../../../../components/AthleteMinCard";
import { useEffect, useState } from 'react';
import type { AthleteMinDTO } from '../../../../models/athlete-min-dto';
import axios from 'axios';

export default function FemaleAthletes() {

  const [athletes, setAthletes] = useState<AthleteMinDTO[]>([]);

  const [athletesQuantity, setAthletesQuantity] = useState<number>();

  useEffect(() => {
    axios.get("http://localhost:8080/v1/athletes?status=active&gender=f")
      .then(
        response => {
          console.log(response.data);
          setAthletes(response.data);
          setAthletesQuantity(response.data.length);
        }
      );
  }, []);

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