import "./info-card.scss";

function InfoCard({ icon, title, info, isWhite }) {
  const classList = ["fp-comp-info-card"];
  isWhite && classList.push("");

  return (
    <div className={classList.join(" ")}>
      <div className="head">
        <div className="icon">{icon}</div>
        <div className="title fp-text-style-label-light">{title}</div>
      </div>
      <div className="info fp-text-style-body">{info}</div>
    </div>
  )
}

export default InfoCard