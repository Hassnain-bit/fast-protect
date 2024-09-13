import "./hero-card.scss";

function HeroCard({ title, description, primaryAction, secondaryAction }) {
  return (
    <div className='fp-comp-hero-card'>
      <div className="body">
        <h1 className="title">{title}</h1>
        <div className="description fp-text-style-body">{description}</div>
      </div>
      <div className="actions">
        <div className="action action-primary" onClick={primaryAction.onClick}>
          <div className="icon">{primaryAction.icon}</div>
          <div className="action fp-text-style-label-normal">{primaryAction.action}</div>
        </div>
        <div className="action action-secondary" onClick={secondaryAction.onClick}>
          <div className="icon">{secondaryAction.icon}</div>
          <div className="action fp-text-style-label-normal">{secondaryAction.action}</div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard;