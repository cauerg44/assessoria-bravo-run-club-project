import './styles.css';

export default function AthleteMinCard() {
  return (
    <>
      <div className="brc-athlete-min-card">
        <div className="brc-athlete-min-card-name">
          <p>Cauê Garcia</p>
        </div>
        <div className="brc-athlete-min-card-birth-date">
          <p>08/11/2004</p>
        </div>
        <div className="brc-athlete-min-card-athlete-goal">
          <h3>Objetivo</h3>
          <p>Correr 5km abaixo de 20 minutos</p>
        </div>
      </div>
    </>
  );
}