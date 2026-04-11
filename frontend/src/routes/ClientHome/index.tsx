import CardFoundersModal from "../../components/CardFoundersModal";
import CardPlansModal from "../../components/CardPlansModal";
import Header from "../../components/Header";
import HomeCard from "../../components/HomeCard";
import instagramIcon from '../../assets/instagram-icon.svg';
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
        <section id="brc-home-founders-section">
          <CardFoundersModal />
        </section>
      </main>
      <footer className="brc-footer">
        <div className="brc-footer-container temp-container">
          <div className="brc-footer-container-content">
            <div className="brc-footer-social-media">
              <img src={instagramIcon} alt="Instagram" />
              <a href="https://www.instagram.com/assessoria.bravo/">@assessoria.bravo</a>
            </div>
            <p>Corra com coração, vença com a alma.</p>
          </div>
        </div>
      </footer>
    </>
  );
}