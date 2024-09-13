import "./section-label.scss";

function SectionLabel({ title, icon, isWhite }) {

  const classList = ["fp-comp-section-label"];
  isWhite && classList.push("bg-white");

  return (
    <div className={classList.join(" ")} >
      <div className="container">
        <div className="icon">{icon}</div>
        <div className="title fp-text-style-label-light">{title}</div>
      </div>
    </div>
  )
}

export default SectionLabel