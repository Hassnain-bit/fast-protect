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
        title: "Rapidité",
        info: "Obtenez un devis personnalisé en moins de 2 minutes. Notre processus en ligne est rapide et direct, vous faisant gagner du temps précieux."
    },
    {
        title: "Facilité",
        info: "Votre sécurité en quelques clics. Pas de paperasse compliquée, juste une expérience utilisateur fluide et conviviale."
    },
    {
        title: "Assistance expertise",
        info: "Bien que notre processus soit en ligne, notre équipe d'experts est toujours disponible pour vous assister et répondre à toutes vos questions."
    },
]

function SectionAdvantagesSubscription() {

    return (
        <div className='sectionAdvantages subscription' style={{ backgroundColor: "var(--fp-color-blue-degree-95)" }}>
            <div className='details'>
                <MaxWidth>
                    <SectionLabel
                        icon={<IconSimpleFlag fill={"var(--fp-comp-section-label-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                        title={"Nos Avantages"}
                        isWhite={false}
                    />
                    <Spacer size={"16px"} />
                    <h2 className='fp-text-style-header-large'>
                        Souscription Simplifiée en Ligne
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

            <FloatingLogo isWhite={true}/>
        </div>
    )
}

export default SectionAdvantagesSubscription