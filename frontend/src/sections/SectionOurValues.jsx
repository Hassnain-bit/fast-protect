import React from 'react'
import MaxWidth from '../components/MaxWidth';
import SectionLabel from '../components/SectionLabel';
import Spacer from '../components/Spacer';
import IconSimpleFlag from '../assets/icons/IconSimpleFlag';
import IconSprint from '../assets/icons/IconSprint';
import '../styles/SectionOurValues.css';
import IconExperience from '../assets/icons/IconExperience';
import IconInnovation from '../assets/icons/IconInnovation';
import IconTrust from '../assets/icons/IconTrust';
import IconToDo from '../assets/icons/IconToDo';
import IconGarantee from '../assets/icons/IconGarantee';
import FloatingLogo from '../components/FloatingLogo';

function SectionOurValues() {
  return (
    <div className='sectionOurValues' style={{ padding: "var(--fp-size-section-padding-v2) 0", position: "relative" }}>

      <MaxWidth>
        <div style={{ position: "relative", zIndex: "1" }}>
          <SectionLabel
            icon={<IconSimpleFlag fill={"var(--fp-comp-section-label-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
            title={"Nos Valeurs"}
            isWhite={false}
          />
          <Spacer size={"16px"} />
          <Spacer size={"48px"} />

          <div className='holder'>
            <div className='text'>
              <h2 className='fp-text-style-header-large light'>
                Fast Protect s'est rapidement établi comme
                un acteur clé dans le monde de l'assurance, en mettant constamment
                l'accent sur l'amélioration et l'adaptation de nos services pour répondre
                efficacement aux besoins évolutifs de nos clients.
              </h2>
            </div>

            <div className='values'>
              <div className='item'>
                <IconSprint />
                <span>Agilité</span>
              </div>

              <div className='item'>
                <IconExperience />
                <span>Efficacite</span>
              </div>

              <div className='item'>
                <IconInnovation />
                <span>Innovation</span>
              </div>

              <div className='item'>
                <IconTrust />
                <span>Confiance</span>
              </div>

              <div className='item'>
                <IconToDo />
                <span>Simplicite</span>
              </div>

              <div className='item'>
                <IconGarantee />
                <span>Transparence</span>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
      <FloatingLogo isWhite={false} />
    </div>
  )
}

export default SectionOurValues
