import type { AthleteMinDTO } from '../../models/athlete-min-dto';
import './styles.css';

type Props = {
  athleteMinDTO: AthleteMinDTO;
}

export default function AthleteMinCard({ athleteMinDTO }: Props) {
  return (
    <>
      <div className="brc-athlete-min-card">
        <div className="brc-athlete-min-card-name">
          <p>{athleteMinDTO.name}</p>
        </div>
        <div className="brc-athlete-min-card-birth-date">
          <p>{athleteMinDTO.birthDate}</p>
        </div>
        <div className="brc-athlete-min-card-athlete-goal">
          <h3>Objetivo</h3>
          <p>{athleteMinDTO.goal}</p>
        </div>
      </div>
    </>
  );
}