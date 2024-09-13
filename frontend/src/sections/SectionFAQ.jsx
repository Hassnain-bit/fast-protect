import SectionLabel from '../components/SectionLabel'
import MaxWidth from '../components/MaxWidth'
import IconBoxQ14 from '../assets/icons/IconBoxQ14'
import Spacer from '../components/Spacer'
import Accordion from '../components/Accordion'
import FloatingLogo from '../components/FloatingLogo'

const faqs = [
  {
    question: "Pourquoi choisir Fast Protect ?",
    answer:
      <div className='fp-text-style-body'>
        <p className='fp-text-style-label-normal'>- Protection Complète:</p>
        Nous offrons une couverture complète pour vous protéger contre les risques , que vous soyez un professionnel indépendant .
        <p className='fp-text-style-label-normal'>- Adaptabilité:</p>
        Nos solutions sont flexibles. Nous vous offrons des options qui évoluent avec votre entreprise et votre vie personnelle.
        <p className='fp-text-style-label-normal'>- Prix Transparent:</p>
        Avec Fast Protect, ce que vous voyez est ce que vous obtenez. Des prix compétitifs sans frais cachés.
        <p className='fp-text-style-label-normal'>- Confiance et Sécurité:</p>
        Votre sécurité est notre priorité. Nous utilisons les dernières technologies pour protéger vos données et garantir la confidentialité de vos informations.
      </div>
  },
  {
    question: "question 2",
    answer: "response 2"
  },
  {
    question: "question 3",
    answer: "response 3"
  },
  {
    question: "question 4",
    answer: "response 4"
  },
  {
    question: "question 5",
    answer: "response 5"
  },
]

function SectionFAQ() {
  return (
    <div style={{ padding: "var(--fp-size-section-padding-v2) 0", backgroundColor: "var(--fp-color-white)", position: "relative" }}>
      <MaxWidth>
        <div style={{position: "relative", zIndex: "1"}}>
          <SectionLabel
            icon={<IconBoxQ14 fill={"var(--fp-comp-section-label-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
            title={"Vos Questions"}
            isWhite={true}
          />
          <Spacer size={"16px"} />
          <h2 className='fp-text-style-header-large'>
            Voilà la réponse à des questions
            <br />
            posées par des gens comme vous
          </h2>
          <Spacer size={"48px"} />
          <Accordion faqs={faqs} isWhite={false} />
        </div>
      </MaxWidth>

      <FloatingLogo isWhite={false}/>
    </div>
  )
}

export default SectionFAQ