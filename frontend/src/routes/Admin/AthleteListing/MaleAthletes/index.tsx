import AthleteMinCard from '../../../../components/AthleteMinCard';
import './styles.css';

export default function MaleAthletes() {
  return (
    <section id="brc-male-athletes-section" className="brc-container-1100">
      <h4>Atletas encontrados: 9</h4>
      <div className='brc-male-athletes-cards-container'>
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