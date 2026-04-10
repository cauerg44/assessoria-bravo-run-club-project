import CardPlansModal from "../../components/CardPlansModal";
import Header from "../../components/Header";
import HomeCard from "../../components/HomeCard";
import './styles.css';


export default function ClientHome() {
  return (
    <>
      <Header />
      <main>
        <section id="brc-motivational-section">
          <HomeCard />
        </section>
        <section id="brc-home-plans-section">
          <CardPlansModal />
        </section>
      </main>

    </>
  );
}