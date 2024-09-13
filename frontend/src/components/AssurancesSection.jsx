import AssuranceCard from './AssuranceCard';
import './AssurancesSection.scss';
import MaxWidth from './MaxWidth';
import SectionLabel from '../components/SectionLabel';
import Spacer from '../components/Spacer';
import IconBoxDiamondGreen from '../assets/icons/IconBoxDiamondGreen';
import FloatingLogo from '../components/FloatingLogo';
import AssuranceCardCoinImage from '../assets/AssuranceCardCoinImage.png';
import AssuranceCardPaperImage from '../assets/AssuranceCardPaperImage.png';
import AssuranceCardMoneyImage from '../assets/AssuranceCardMoneyImage.png';

const assurancesData = [
  {
    imageSrc: AssuranceCardCoinImage,
    title: "Responsabilité Civile",
    description: "Cette assurance couvre les dommages que vous causez à autrui, que ce soit dans votre vie privée ou professionnelle."
  },
  {
    imageSrc: AssuranceCardPaperImage,
    title: "Assurance Cyber-Risques",
    description: "Cette assurance protège votre entreprise contre les piratages informatiques, les fuites de données et autres cyberattaques."
  },
  {
    imageSrc: AssuranceCardMoneyImage,
    title: "Materiel Informatique",
    description: "Matériel Informatique : Couvre les dommages à vos ordinateurs, portables, tablettes et autres appareils électroniques."
  },
  {
    imageSrc: AssuranceCardCoinImage,
    title: "Bureau Local et Professionnel",
    description: "Bureau Local et Professionnel : Couvre les dommages à vos locaux professionnels, meubles et équipements."
  },
  {
    imageSrc: AssuranceCardPaperImage,
    title: "Garantie Decennale",
    description: "Cette assurance couvre les vices de construction qui peuvent apparaître dans les 10 ans suivant la livraison du bâtiment."
  },
  {
    imageSrc: AssuranceCardMoneyImage,
    title: "Mutuelle Dirigeant",
    description: "Cette mutuelle offre une couverture complémentaire à la Sécurité Sociale pour les dirigeants d'entreprise."
  },
  {
    imageSrc: AssuranceCardCoinImage,
    title: "Prevoyance Dirigeant",
    description: "Cette assurance permet de garantir le maintien du revenu du dirigeant en cas d'incapacité de travail."
  },
  {
    imageSrc: AssuranceCardPaperImage,
    title: "Assurance Homme Cle",
    description: "Cette assurance protège l'entreprise contre les pertes financières consécutives à l'indisponibilité d'un salarié clé."
  },
  {
    imageSrc: AssuranceCardMoneyImage,
    title: "Mutuelle Entreprise",
    description: "Cette mutuelle offre une couverture complémentaire à la Sécurité Sociale pour les salariés de l'entreprise."
  },
];

const AssurancesSection = () => {
  return (
    <div style={{ padding: "var(--fp-size-section-padding-v2) 0", position: "relative" }}>
      <MaxWidth>
        <div style={{ position: "relative", zIndex: "1" }}>
          <SectionLabel
            icon={<IconBoxDiamondGreen />}
            title={"Nos assurances"}
            isWhite={true}
          />
          <Spacer size={"16px"} />
          <h2 className='fp-text-style-header-large'>
            Nous offrons le meillieur service pour<br />satisfaire votre besoin rapidement
          </h2>
          <Spacer size={"48px"} />

          <div className="assurances-cards">
            <div className="assurances-cards__grid">
              {assurancesData.map((assurance, index) => (
                <AssuranceCard key={index} imageSrc={assurance.imageSrc} title={assurance.title}>
                  {assurance.description}
                </AssuranceCard>
              ))}
            </div>
          </div>
        </div>
      </MaxWidth>

      <FloatingLogo isWhite={false} />
    </div>
  );
};

export default AssurancesSection;
