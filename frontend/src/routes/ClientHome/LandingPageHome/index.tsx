import './styles.css';
import FoundersCardsModalHome from "../../../components/FoundersCardsModalHome";
import MotivationalCardHomeModal from "../../../components/MotivationalCardHomeModal";
import PlansCardsHomeModal from "../../../components/PlansCardsHomeModal";

export default function LandingPageHome() {

  return (
    <main>
      <section id="brc-home-motivational-section">
        <MotivationalCardHomeModal />
      </section>
      <section id="brc-home-plans-section">
        <PlansCardsHomeModal />
      </section>
      <section id="brc-home-founders-section">
        <FoundersCardsModalHome />
      </section>
    </main>
  )
}