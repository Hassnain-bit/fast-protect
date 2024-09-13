import IconSimpleSend from '../assets/icons/IconSimpleSend';
import CarouselCard from '../components/CarouselCard';
import Grid from '../components/Grid';
import GridCell from '../components/GridCell';
import HeroCard from '../components/HeroCard';
import MaxWidth from '../components/MaxWidth';

function SectionHero() {
  return (
    <div style={{ padding: "var(--fp-size-section-padding-v) 0", backgroundColor: "var(--fp-color-blue-degree-95)" }}>
      <MaxWidth>
        <Grid gutter={16} maxColumns={2}>
          <GridCell>
            <div style={{ height: "368px" }}>
              <HeroCard
                title={
                  <>
                    <span className='fp-text-style-header-big'>Protection&nbsp;</span>
                    <span className='fp-text-style-header-big-special'>Rapide</span>
                    <br />
                    <span className='fp-text-style-header-big'>Avec Fast Protect</span>
                  </>
                }
                description={
                  "Bienvenue chez Fast Protect, où la protection juridique est rendue simple et intuitive. Dans le monde rapide d'aujourd'hui, nous savons que l'efficacité est clé. C'est pourquoi notre plateforme en ligne vous permet de souscrire facilement"
                }
                primaryAction={{
                  icon: <IconSimpleSend fill={"var(--fp-comp-hero-card-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />,
                  action: "Savoir plus",
                  onClick: () => { console.log("primary action") }
                }}
                secondaryAction={{
                  icon: <IconSimpleSend fill={"var(--fp-comp-hero-card-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />,
                  action: "Souscrire",
                  onClick: () => { console.log("secondary action") }
                }}
              />
            </div>
          </GridCell>
          <GridCell>
            <div style={{ height: "368px" }}>
              <CarouselCard
                items={[
                  {
                    title: "Assurance Cyber-risques",
                    images: [
                      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
                      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
                      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
                    ]
                  },
                  {
                    title: "Matériel Informatique",
                    images: [
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
                      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
                    ]
                  },
                  {
                    title: "Responsabilité Civile",
                    images: [
                      "https://images.unsplash.com/photo-1504834636679-cd3acd047c06",
                      "https://images.unsplash.com/photo-1504834636679-cd3acd047c06",
                      "https://images.unsplash.com/photo-1504834636679-cd3acd047c06",
                    ]
                  },
                ]}
              />
            </div>
          </GridCell>
        </Grid>
      </MaxWidth>
    </div>
  )
}

export default SectionHero