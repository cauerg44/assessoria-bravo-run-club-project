
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
      </main>
    </>
  );
}