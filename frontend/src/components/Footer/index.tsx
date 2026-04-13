import './styles.css';
import instagramIcon from '../../assets/instagram-icon.svg';

export default function Footer() {
  return (
    <footer className="brc-footer">
      <div className="brc-footer-container brc-container-1100">
        <div className="brc-footer-container-content">
          <div className="brc-footer-social-media">
            <img src={instagramIcon} alt="Instagram" />
            <a href="https://www.instagram.com/assessoria.bravo/">@assessoria.bravo</a>
          </div>
          <p>Corra com coração, vença com a alma.</p>
        </div>
      </div>
    </footer>
  );
}