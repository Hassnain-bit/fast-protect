import "./separator.scss";

function Separator({ color, length, orientation = "vertical" }) {

  const classList = ["fp-comp-separator"];
  classList.push(`orientation-${orientation}`)

  return (
    <div
      className={classList.join(" ")}
      style={{
        "--fp-comp-separator-color": color,
        "--fp-comp-separator-length": length
      }}>
    </div>
  )
}

export default Separator