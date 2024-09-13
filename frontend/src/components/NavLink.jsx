import "./nav-link.scss";

function NavLink({ title, icon, isActive, link, isFullWidth }) {

  const classList = ["fp-comp-nav-link"];
  isActive && classList.push("active");
  isFullWidth && classList.push("full-width");

  let Element = ({ href, children, ...props }) => (<a href={href} {...props}>{children}</a>);
  if (!link) {
    Element = (props) => {
      const { href, ...other } = props;
      return <div {...other}></div>
    };
  }

  return (
    <Element href={link} className={classList.join(' ')}>
      <div className="icon">{icon}</div>
      <div className="title fp-text-style-label-light">{title}</div>
    </Element>
  )
}

export default NavLink