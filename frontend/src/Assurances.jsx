import './App.scss';
import SectionHero from './sections/SectionHero';
import AssurancesSection from './components/AssurancesSection';
import LandingPage from './templates/LandingPage';
import SectionConsultation from './sections/SectionConsultation';
import SectionContact from './sections/SectionContact';

function Assurances() {
    return (
      <div className="App">
        <LandingPage>
            <SectionHero />
            <AssurancesSection />
            <SectionConsultation/>
            <SectionContact/>
        </LandingPage>
      </div>
    );
  }
  
  export default Assurances;
  