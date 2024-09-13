import IconSimplePerson from "../assets/icons/IconSimplePerson"
import FloatingLogo from "../components/FloatingLogo"
import MaxWidth from "../components/MaxWidth"
import Reviews from "../components/Reviews"
import SectionLabel from "../components/SectionLabel"
import Spacer from "../components/Spacer"

const reviews = [
  {
    rating: 4.5,
    author: {
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
      name: "Joudia Polaire",
      role: "PDG du Groupe TikTeck Limited"
    },
    quote: "Fast Protect m'a permis de résoudre les problèmes de protection sans délai."
  },
  {
    rating: 5,
    author: {
      image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f",
      name: "Tim Olivier",
      role: "CEO de Olivera"
    },
    quote: "I like Fast Protect because now I can work with piece of mind."
  },
  {
    rating: 4,
    author: {
      image: "https://images.unsplash.com/photo-1504834636679-cd3acd047c06",
      name: "Lina Collins",
      role: "Manager at SisterFashion"
    },
    quote: "Fast Protect made my business safe and secure."
  },
]

function SectionReviews() {
  return (
    <div style={{ padding: "var(--fp-size-section-padding-v) 0", backgroundColor: "var(--fp-color-blue-degree-95)", position: "relative" }}>
      <MaxWidth>
      <div style={{position: "relative", zIndex: "1"}}>
          <SectionLabel
            icon={<IconSimplePerson fill={"var(--fp-comp-section-label-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
            title={"Nos Clients"}
            isWhite={false}
          />
          <Spacer size={"16px"} />
          <h2 className='fp-text-style-header-large'>
            Des gens comme vous, nous ont
            <br />
            choisi pour être bien protégés
          </h2>
          <Spacer size={"48px"} />
          <Reviews reviews={reviews} />
        </div>
      </MaxWidth>

      <FloatingLogo isWhite={true} />
    </div>
  )
}

export default SectionReviews