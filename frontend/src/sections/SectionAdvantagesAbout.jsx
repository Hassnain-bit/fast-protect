import IconSimpleFlag from '../assets/icons/IconSimpleFlag';
import Grid from '../components/Grid';
import GridCell from '../components/GridCell';
import InfoCard from '../components/InfoCard';
import MaxWidth from '../components/MaxWidth';
import SectionLabel from '../components/SectionLabel';
import Spacer from '../components/Spacer';
import '../styles/SectionAdvantages.css';
import FloatingLogo from '../components/FloatingLogo';

const advantages = [
  {
    title: "Nos engagements",
    info: "Chez Fast Protect, nous nous engageons à vous offrir une expérience client exceptionnelle, des solutions personnalisées et un support fiable à chaque étape. Notre objectif est de vous assurer tranquillité d'esprit et protection optimale."
  },
  {
    title: "Notre équipe",
    info: "Professionnalisme et Expertise : Notre équipe d'experts dédiés est toujours là pour vous fournir des conseils avisés et vous accompagner dans toutes vos démarches d'assurance."
  },
]

function SectionAdvantagesAbout() {

  return (
    <div className='sectionAdvantages' style={{ backgroundColor: "var(--fp-color-blue-degree-95)" }}>
      <div className='details'>
        <MaxWidth>
          <SectionLabel
            icon={<IconSimpleFlag fill={"var(--fp-comp-section-label-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
            title={"Nos Avantages"}
            isWhite={false}
          />
          <Spacer size={"16px"} />
          <h2 className='fp-text-style-header-large'>
            Pourquoi choisir Fast Protect?
          </h2>
          <Spacer size={"48px"} />

          {/* YOUR CODE */}

          <div className='grid-layer'>
            <div className='grid'>
              {
                advantages.map((a, i) => (
                  <GridCell key={i}>
                    <InfoCard
                      title={a.title}
                      icon={<IconSimpleFlag fill={"var(--fp-comp-info-card-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                      info={a.info}
                      isWhite={true}
                    />
                  </GridCell>
                ))
              }
            </div>
          </div>
        </MaxWidth>
      </div>


      <FloatingLogo isWhite={true} />

    </div>
  )
}

export default SectionAdvantagesAbout