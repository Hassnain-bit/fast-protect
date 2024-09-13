import './App.scss';
import SectionAdvantages from './sections/SectionAdvantages';
import SectionAdvantagesSubscription from './sections/SectionAdvantagesSubscription';
import SectionContact from './sections/SectionContact';
import SectionFAQ from './sections/SectionFAQ';
import SectionHero from './sections/SectionHero';
import SectionRegistration from './sections/SectionRegistration';
import SectionReviews from './sections/SectionReviews';
import LandingPage from './templates/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage>
        <SectionHero />
        <SectionAdvantages />
        <SectionAdvantagesSubscription/>
        <SectionRegistration/>
        <SectionFAQ />
        <SectionReviews />
        <SectionContact />
      </LandingPage>
    </div>
  );
}

export default App;
