import { Fragment, useEffect, useRef, useState } from "react";
import "./accordion.scss";
import Separator from "./Separator";
import IconBoxQ14 from "../assets/icons/IconBoxQ14";

function Accordion({ faqs, isWhite }) {

  const classList = ["fp-comp-accordion"];
  const accordionRef = useRef();
  const [accordionWidth, setAccordionWidth] = useState(0);
  const [variation, setVariation] = useState("none");
  const [selectedIndex, setSelectedIndex] = useState(0);

  classList.push(`variation-${variation}`);
  isWhite && classList.push("bg-white");

  // on first render
  // set ResizeObserver
  // which sets accordionWidth on accordion resize
  useEffect(() => {
    new ResizeObserver(() => { setAccordionWidth(accordionRef.current.offsetWidth) }).observe(accordionRef.current)
  }, [])

  // on accordionWidth change
  // change variation
  useEffect(() => {
    if (accordionWidth > 900) {
      setVariation("wide");
    } else {
      setVariation("mobile");
    }
  }, [accordionWidth])

  return (
    <div className={classList.join(" ")} ref={accordionRef}>
      <div className="questions">
        {
          faqs.map((faq, i) => (
            <Fragment key={i}>
              <div
                className={i === selectedIndex ? "question active" : "question"}
                onClick={() => { setSelectedIndex(i) }}
              >
                <div className="container">
                  <div className="icon">
                    <IconBoxQ14 fill={"var(--fp-comp-accordion-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />
                  </div>
                  <div className="fp-text-style-label-normal">{faq.question}</div>
                </div>
              </div>
              {
                variation === "mobile" && i === selectedIndex &&
                <div className="answer">
                  <div className="container fp-text-style-body">
                    {faqs[selectedIndex].answer}
                  </div>
                </div>
              }
              {i + 1 < faqs.length && <Separator orientation="horizontal" length={"100%"} color={"var(--fp-color-blue-degree-95)"} />}
            </Fragment>
          ))
        }
      </div>
      {
        variation === "wide" &&
        <div className="answer fp-text-style-body">
          {faqs[selectedIndex].answer}
        </div>
      }
    </div>
  )
}

export default Accordion