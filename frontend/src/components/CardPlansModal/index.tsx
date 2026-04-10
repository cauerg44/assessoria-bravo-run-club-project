import './styles.css';
import ButtonPrimary from "../ButtonPrimary";

export default function CardPlansModal() {
  return (
    <>
      <div className='brc-modal-container line-bottom-blue temp-container'>
        <h2>Conheça nossos planos</h2>
        <div className='brc-modal-container-cards'>
          <div className="brc-plan-card">
            <h4>Plano PRESENCIAL - BRAVO</h4>
            <p>✔ Acompanhamento presencial com o coach durante os treinos</p>
            <p>✔ Correção de postura e técnica de corrida em tempo real</p>
            <p>✔ Relatório semanal com análise clara de desempenho</p>
            <p>✔ Planilhas semanais personalizadas conforme objetivo</p>
            <p>✔ Treinos em grupo para mais motivação e consistência</p>
            <h5>R$ 79,90</h5>
            <ButtonPrimary text="Assinar plano PRESENCIAL" />
          </div>

          <div className="brc-plan-card">
            <h4>Plano ONLINE - BRAVO</h4>
            <p>✔ Acompanhamento online com suporte via app ou WhatsApp</p>
            <p>✔ Planilhas semanais personalizadas conforme nível</p>
            <p>✔ Relatório semanal com feedback claro dos treinos</p>
            <p>✔ Ajustes contínuos com base na sua evolução</p>
            <p>✔ Flexibilidade total de horário e local de treino</p>
            <h5>R$ 59,90</h5>
            <ButtonPrimary text="Assinar plano ONLINE" />
          </div>
        </div>
      </div>
    </>
  );
}