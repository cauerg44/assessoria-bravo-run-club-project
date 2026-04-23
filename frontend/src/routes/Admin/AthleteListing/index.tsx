import { Outlet } from 'react-router-dom';
import './styles.css';
import FilterAthletesCard from '../../../components/FilterCardAthletes';

export default function AthleteListing() {

  return (
    <>
      <main>
        <section id='brc-athletes-listing-section'>
          <FilterAthletesCard />
          <Outlet />
        </section>
      </main>
    </>
  )
}