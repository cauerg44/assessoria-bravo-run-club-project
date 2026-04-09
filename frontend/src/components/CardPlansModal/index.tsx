import './styles.css';
import ButtonPrimary from "../ButtonPrimary";

export default function CardPlansModal() {
  return (
    <>
      <div className="brc-plans-card-container line-bottom-blue temp-container">
        <h2>Conheça nossos planos</h2>
        <div className="brc-plans-card-modal">
          <div className="brc-plan-card">
            <h4>Plano PRESENCIAL - BRAVO</h4>
            <p>✔ Acompanhamento presencial com o coach durante os treinos</p>
            <p>✔ Correção de postura, técnica de corrida e pacing em tempo real</p>
            <p>✔ Relatório semanal com análise de desempenho e evolução</p>
            <p>✔ Planilhas semanais personalizadas de acordo com seu objetivo</p>
            <p>✔ Treinos em grupo para aumentar motivação e consistência</p>
            <h5>R$ 79,90</h5>
            <ButtonPrimary text="Assinar PRESENCIAL" />
          </div>
          <div className="brc-plan-card">
            <h4>Plano ONLINE - BRAVO</h4>
            <p>✔ Acompanhamento online com suporte direto via aplicativo/WhatsApp</p>
            <p>✔ Planilhas semanais personalizadas conforme seu nível e metas</p>
            <p>✔ Relatório semanal com feedback detalhado dos treinos</p>
            <p>✔ Ajustes contínuos com base na sua evolução</p>
            <p>✔ Ideal para quem precisa de flexibilidade de horário e local</p>
            <h5>R$ 59,90</h5>
            <ButtonPrimary text="Assinar ONLINE" />
          </div>
        </div>
      </div>
    </>
  );
}