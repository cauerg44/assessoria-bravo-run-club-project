import './styles.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MotivationalCardHomeModal from "../../components/MotivationalCardHomeModal";
import PlansCardsHomeModal from "../../components/PlansCardsHomeModal";
import FoundersCardsModalHome from "../../components/FoundersCardsModalHome";

export default function ClientHome() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}