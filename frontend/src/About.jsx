import LandingPage from './templates/LandingPage';
import SectionHero from './sections/SectionHero';
import SectionAdvantages from './sections/SectionAdvantages';
import SectionContact from './sections/SectionContact';
import SectionOurValues from './sections/SectionOurValues';
import PourquoiNous from './components/PourquoiNous';
import SectionAdvantagesAbout from './sections/SectionAdvantagesAbout';


function About() {
    return (
        <LandingPage>
            <SectionHero />
            <SectionOurValues/>
            <SectionAdvantagesAbout/>
            {/* <PourquoiNous /> */}
            <SectionContact/> 
        </LandingPage>
    )
}

export default About;