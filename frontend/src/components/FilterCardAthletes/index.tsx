import { NavLink } from 'react-router-dom';
import './styles.css';

export default function FilterCardAthletes() {
  return (
    <>
      <div className='brc-filter-card-modal-container brc-container-1100'>
        <h2>Filtrar atletas:</h2>
        <div className='brc-filter-card-modal-athletes'>
          <NavLink to={"/admin/athletes/male"} className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Atletas homens</NavLink>
          <NavLink to={"/admin/athletes/female"} className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>Atletas mulheres</NavLink>
        </div>
      </div>
    </>
  );
}