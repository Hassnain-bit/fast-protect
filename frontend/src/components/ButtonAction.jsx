import "./button-action.scss";

function ButtonAction({title, icon, isFullWidth, isSpecial, onClick}) {

  const classList=["fp-comp-button-action"];
  isFullWidth && classList.push("full-width");
  isSpecial && classList.push("special");

  return (
    <button className={classList.join(" ")} onClick={onClick}>
      <div className="icon">{icon}</div>
      <div className="title fp-text-style-label-normal">{title}</div>
    </button>
  )
}

export default ButtonAction