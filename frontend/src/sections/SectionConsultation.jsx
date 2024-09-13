import React from 'react'
import MaxWidth from '../components/MaxWidth'
import '../styles/SectionConsultation.css'
import ButtonIconWhite from '../assets/ButtonIconWhite.svg'
import IconDownButton from '../assets/icons/IconDownButton'

function SectionConsultation() {
    return (
        <div className='sectionConsultation' style={{ padding: "var(--fp-size-section-padding-v2) 0", backgroundColor: "var(--fp-color-blue-degree-95)" }}>
            <MaxWidth>
                <div className='holder'>
                    <div className='cta'>
                        <h2 className='fp-text-style-header-large'>
                            Besoin d’aide pour choisir ?
                        </h2>
                        <p>Une section offrant des guides et des conseils pour aider les clients à choisir l'assurance adaptée à leurs besoins</p>

                        <a href='#abc'>
                            <img src={ButtonIconWhite} alt='Button Icon' />
                            <span>Consulter nos guides</span>
                        </a>
                    </div>
                    <div className='info'>
                        <p>
                            Pas sûr de votre choix ?<br/>
                            Contactez-nous !
                        </p>
                        <p>
                            Nos experts sont là pour vous aider.
                            Contactez-nous pour des conseils
                            personnalisés et trouvez l'assurance
                            qui vous convient le mieux.
                        </p>

                        <div>
                            <IconDownButton/>
                        </div>
                    </div>
                </div>
            </MaxWidth>
        </div>
    )
}

export default SectionConsultation
