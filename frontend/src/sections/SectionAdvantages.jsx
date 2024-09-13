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
    title: "Protection Complète",
    info: "Nous offrons une couverture complète pour vous protéger contre les risques juridiques, que vous soyez un professionnel indépendant ou une grande entreprise."
  },
  {
    title: "Adaptabilité",
    info: "Nos solutions sont flexibles. Nous vous offrons des options qui évoluent avec votre entreprise et votre vie personnelle."
  },
  {
    title: "Prix Transparent",
    info: "Avec Fast Protect, ce que vous voyez est ce que vous obtenez. Des prix compétitifs sans frais cachés."
  },
  {
    title: "Confiance et Sécurité",
    info: "Votre sécurité est notre priorité. Nous utilisons les dernières technologies pour protéger vos données et garantir la confidentialité de vos informations."
  },
]

function SectionAdvantages() {

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
            <br />
            Car nous partageons vos soucis
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

export default SectionAdvantages