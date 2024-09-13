import { Fragment } from "react"
import IconBoxDiamond14 from "../assets/icons/IconBoxDiamond14"
import IconBoxHome14 from "../assets/icons/IconBoxHome14"
import LogoIcon from "../assets/logo/LogoIcon"
import MaxWidth from "../components/MaxWidth"
import NavLink from "../components/NavLink"
import Separator from "../components/Separator"
import IconBoxShop14 from "../assets/icons/IconBoxShop14"
import IconBoxService14 from "../assets/icons/IconBoxService14"
import '../styles/Header.css';

const links = [
  {
    title: "Acceuil",
    Icon: IconBoxHome14,
    link: "/",
    isExact: true
  },
  {
    title: "Prices",
    Icon: IconBoxDiamond14,
    link: "/prices",
    isExact: false
  },
  {
    title: "nos assurances",
    Icon: IconBoxService14,
    link: "/assurances",
    isExact: false
  },
  {
    title: "à propos",
    Icon: IconBoxShop14,
    link: "/about",
    isExact: false
  },
  {
    title: "blog",
    Icon: IconBoxShop14,
    link: "/blog",
    isExact: false
  },
]

function Header() {

  return (
    <div className="header" style={{ padding: "8px 0", backgroundColor: "var(--fp-color-white)" }}>
      <MaxWidth>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ display: "flex", padding: "0 16px", alignItems: "center" }}>
            <LogoIcon fill={"var(--fp-color-blue-main)"} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {
              links.map(({ title, Icon, link, isExact }, i) => (
                <Fragment key={i}>
                  <NavLink
                    link={link}
                    isActive={isExact ? window.location.pathname === link : window.location.pathname.startsWith(link)}
                    title={title}
                    icon={<Icon fill={"var(--fp-comp-nav-link-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />}
                  />
                  {i + 1 < links.length && <Separator length={"20px"} color={"var(--fp-color-blue-degree-95)"} />}
                </Fragment>
              ))
            }
          </div>
        </div>
      </MaxWidth>
    </div>
  )
}

export default Header