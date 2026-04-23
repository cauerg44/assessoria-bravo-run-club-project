import { Link } from 'react-router-dom';
import './styles.css';

export default function HeaderAdmin() {
  return (
    <header className='brc-header-admin'>
      <nav className='brc-container-1100 brc-nav-header-admin'>
        <Link to={"/admin"}>
          <h2>Área administrativa</h2>
        </Link>
        <h4>Olá, Admin!</h4>
      </nav>
    </header>
  );
}