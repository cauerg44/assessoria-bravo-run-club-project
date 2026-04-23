import './styles.css';
import AthleteMinCard from "../../../../components/AthleteMinCard";

export default function FemaleAthletes() {
  return (
    <section id="brc-female-athletes-section" className="brc-container-1100">
      <h4>Atletas encontradas: 9</h4>
      <div className='brc-female-athletes-cards-container'>
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
        <AthleteMinCard />
      </div>
    </section>
  );
}