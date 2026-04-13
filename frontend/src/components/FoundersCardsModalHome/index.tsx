import './styles.css';
import jenifferImg from '../../assets/jeniffer.png';
import thiagoImg from '../../assets/thiago.png';
import vitorImg from '../../assets/vitor.jpeg';
import instagramIcon from '../../assets/instagram-icon.svg';

export default function FoundersCardsModalHome() {
  return (
    <div className='brc-founders-modal-container brc-container-1100'>
      <h2>Sócios da Bravo Run Club</h2>
      <div className='brc-founders-modal'>
        <div className='brc-founder-card'>
          <img src={jenifferImg} alt="Founder profile photo" />
          <div className='brc-founder-card-details'>
            <h3>Jennifer Ispinosa</h3>
            <h4>Sócia da BRAVO</h4>
            <p>Fundadora da bravo e responsável pelo marketing da assessoria</p>
          </div>
          <div className='brc-founder-card-details-social-media'>
            <img src={instagramIcon} alt="Instagram" />
            <a href="https://www.instagram.com/jenifferispinosa/">@jenifferispinosa</a><h5></h5>
          </div>
        </div>
        <div className='brc-founder-card'>
          <img src={thiagoImg} alt="Founder profile photo" />
          <div className='brc-founder-card-details'>
            <h3>Thiaguinho</h3>
            <h4>Sócio da BRAVO</h4>
            <p>Fundador da bravo e responsável pelo financeiro da assessoria</p>
          </div>
          <div className='brc-founder-card-details-social-media'>
            <img src={instagramIcon} alt="Instagram" />
            <a href="https://www.instagram.com/thigasbs/">@thigasbs</a>
          </div>
        </div>
        <div className='brc-founder-card'>
          <img src={vitorImg} alt="Founder profile photo" />
          <div className='brc-founder-card-details'>
            <h3>Vitor Soares</h3>
            <h4>Sócio e coach da BRAVO</h4>
            <p>Sócio e responsável por toda parte técnica da assessoria</p>
          </div>
          <div className='brc-founder-card-details-social-media'>
            <img src={instagramIcon} alt="Instagram" />
            <a href="https://www.instagram.com/vitorsoares.personal/">@vitorsoares.personal</a>
          </div>
        </div>
      </div>
    </div>
  );
}