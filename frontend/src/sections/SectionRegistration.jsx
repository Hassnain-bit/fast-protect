import React from 'react'
import '../styles/SectionRegistration.css';
import MaxWidth from '../components/MaxWidth';
import IconBag from '../assets/icons/IconBag';
import IconPerson from '../assets/icons/IconPerson';
import IconJob from '../assets/icons/IconJob';
import IconFranchise from '../assets/icons/IconFranchise';
import IconBusinessBuilding from '../assets/icons/IconBusinessBuilding';
import IconEmployee from '../assets/icons/IconEmployee';
import IconArchitectFemale from '../assets/icons/IconArchitectFemale';
import FloatingLogo from '../components/FloatingLogo';

function SectionRegistration() {
    return (
        <div className='sectionRegistration' style={{ backgroundColor: "var(--fp-color-blue-degree-95)" }}>
            <MaxWidth>
                <div className="layout">
                    <div className='grid'>
                        <div className='grid-item'>
                            <div className="head">
                                <div className="icon"><IconBag /></div>
                                <div className="title fp-text-style-label-light">Inscription Professionnel</div>
                            </div>
                            <div className="info">
                                <div className='title'>
                                    Votre activité en sécurisée
                                </div>
                                <p>
                                    En tant que professionnel, vous faites face à des défis juridiques uniques. Fast Protect vous offre une couverture adaptée à vos besoins spécifiques, que vous soyez un entrepreneur indépendant, une PME ou une grande entreprise.
                                </p>
                                <div className='tags'>
                                    <div className='tags-item'>Souscription rapide et facile</div>
                                    <div className='tags-item'>Assistance et conseils des experts</div>
                                    <div className='tags-item'>Solutions personnalisees pour votre entreprise</div>
                                </div>
                            </div>
                        </div>

                        <div className='grid-item'>
                            <div className="head">
                                <div className="icon"><IconPerson /></div>
                                <div className="title fp-text-style-label-light">Inscription Particulier</div>
                            </div>
                            <div className="info">
                                <div className='title'>
                                    Votre vie personnelle protegee
                                </div>
                                <p>
                                    Votre vie privée mérite une protection de qualité. Avec Fast Protect, bénéficiez d'une couverture complète pour tous les aspects juridiques de votre vie quotidienne.
                                </p>
                                <div className='tags'>
                                    <div className='tags-item'>Processus de souscription intuitif</div>
                                    <div className='tags-item'>Des formules adapetees a vos besoins personnles</div>
                                    <div className='tags-item'>Support et accompagnement a chaque etape</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='protection'>
                        <div className='grid-item'>
                            <div className="head">
                                <div className="icon"><IconJob /></div>
                                <div className="title fp-text-style-label-light">Protection adaptée à votre secteur</div>
                            </div>
                            <div className="info">
                                <div className='title'>
                                    Si vous etes:
                                </div>
                                <div className='ifYouAre'>
                                    <div className='ifYouAre-item'>
                                        <div className="icon"><IconFranchise /></div>
                                        <div className="text fp-text-style-label-light">Commercant</div>
                                    </div>
                                    <div className='ifYouAre-item'>
                                        <div className="icon"><IconBusinessBuilding /></div>
                                        <div className="text fp-text-style-label-light">Service ou entreprise</div>
                                    </div>
                                    <div className='ifYouAre-item'>
                                        <div className="icon"><IconEmployee /></div>
                                        <div className="text fp-text-style-label-light">Independant</div>
                                    </div>
                                    <div className='ifYouAre-item'>
                                        <div className="icon"><IconArchitectFemale /></div>
                                        <div className="text fp-text-style-label-light">Artisan de renovation</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidth>

            <FloatingLogo isWhite={true} />
        </div>
    )
}

export default SectionRegistration
