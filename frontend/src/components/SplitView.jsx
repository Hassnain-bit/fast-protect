import "./split-view.scss";
import Separator from './Separator';
import { Children, useEffect, useRef, useState } from "react";

function SplitView({ separator, children, isWhite }) {

  const classList = ["fp-comp-split-view"];
  const viewRef = useRef();
  const [viewWidth, setViewWidth] = useState(0);
  const [variation, setVariation] = useState("none");

  classList.push(`variation-${variation}`);
  isWhite && classList.push("bg-white");

  // on first render
  // set ResizeObserver
  // which sets viewWidth on accordion resize
  useEffect(() => {
    new ResizeObserver(() => { setViewWidth(viewRef.current.offsetWidth) }).observe(viewRef.current)
  }, [])

  // on viewWidth change
  // change variation
  useEffect(() => {
    if (viewWidth > 900) {
      setVariation("wide");
    } else {
      setVariation("mobile");
    }
  }, [viewWidth])

  let FirstChild;
  let SecondChild;
  Children.forEach(children, (child, i) => {
    if (i === 0) {
      FirstChild = child;
    }
    if (i === 1) {
      SecondChild = child;
    }
  })

  return (
    <div className={classList.join(" ")} ref={viewRef}>
      <div className="child">{FirstChild}</div>
      <div className="separator">
        <Separator orientation={variation === "wide" ? "vertical" : "horizontal"} length={"100%"} color={"var(--fp-comp-split-view-fg-color)"} />
        <span className="fp-text-style-label-light">{separator}</span>
        <Separator orientation={variation === "wide" ? "vertical" : "horizontal"} length={"100%"} color={"var(--fp-comp-split-view-fg-color)"} />
      </div>
      <div className="child">{SecondChild}</div>
    </div>
  )
}

export default SplitView