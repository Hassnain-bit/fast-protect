import { useEffect, useRef, useState } from "react";
import IconQuoteEnd from "../assets/icons/IconQuoteEnd";
import IconQuoteStart from "../assets/icons/IconQuoteStart";
import IconSimpleArrowLeft from "../assets/icons/IconSimpleArrowLeft";
import IconSimpleArrowRight from "../assets/icons/IconSimpleArrowRight";
import IconSimplePerson from "../assets/icons/IconSimplePerson";
import "./reviews.scss";
import Separator from "./Separator";
import Spacer from "./Spacer";
import IconSimpleStarFull from "../assets/icons/IconSimpleStarFull";
import IconSimpleStarHalf from "../assets/icons/IconSimpleStarHalf";

function Reviews({ reviews, isWhite }) {

  const classList = ["fp-comp-reviews"];
  const reviewsRef = useRef();
  const [reviewsWidth, setReviewsWidth] = useState(0);
  const [variation, setVariation] = useState("none");
  const [selectedIndex, setSelectedIndex] = useState(0);

  classList.push(`variation-${variation}`);
  isWhite && classList.push("bg-white");

  // on first render
  // set ResizeObserver
  // which sets reviewsWidth on accordion resize
  useEffect(() => {
    new ResizeObserver(() => { setReviewsWidth(reviewsRef.current.offsetWidth) }).observe(reviewsRef.current)
  }, [])

  // on reviewsWidth change
  // change variation
  useEffect(() => {
    if (reviewsWidth > 900) {
      setVariation("wide");
    } else {
      setVariation("mobile");
    }
  }, [reviewsWidth])

  const getStarsFromRating = (rating) => {
    const output = [];
    for (let index = 5; index; index--) {
      if (rating > 1 || rating === 1) {
        output.push(<IconSimpleStarFull key={5 - index} fill={"var(--fp-color-turquoise-main)"} stroke={"var(--fp-color-blue-main)"} />);
      } else if (rating > 0 && rating < 1) {
        output.push(<IconSimpleStarHalf key={5 - index} fill={"var(--fp-color-turquoise-main)"} stroke={"var(--fp-color-blue-main)"} />);
      } else {
        output.push(<IconSimpleStarFull key={5 - index} fill={"transparent"} stroke={"var(--fp-color-blue-main)"} />);
      }
      rating--;
    }
    return output;
  }

  return (
    <div className={classList.join(" ")} ref={reviewsRef}>
      {
        reviews && !!reviews.length &&
        <>
          {
            variation === "wide" &&
            <div className="figure">
              <div className="container">
                <div className="image">{<img src={reviews[selectedIndex].author.image} alt="" />}</div>
                <div className="rating">
                  <div className="stars">{getStarsFromRating(reviews[selectedIndex].rating)}</div>
                  <Separator color={"var(--fp-color-white)"} length={"16px"} />
                  <div className="value">
                    <span className="fp-text-style-label-bold">{reviews[selectedIndex].rating}</span>
                    <span className="fp-text-style-label-light">&nbsp;stars</span>
                  </div>
                </div>
              </div>
            </div>
          }
          <div className="caption">
            <div className="body">
              <IconQuoteStart fill={"var(--fp-comp-reviews-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />
              <Spacer size={"32px"} />
              <div className="quote fp-text-style-header-large">{reviews[selectedIndex].quote}</div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <IconQuoteEnd fill={"var(--fp-comp-reviews-icon-fill)"} stroke={"var(--fp-color-blue-main)"} />
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <div className="author">{reviews[selectedIndex].author.name}</div>
                <Separator color={"var(--fp-color-blue-degree-95)"} length={"16px"} />
                <div className="role fp-text-style-label-light" title={reviews[selectedIndex].author.role}>
                  <IconSimplePerson fill={"var(--fp-color-turquoise-main)"} stroke={"var(--fp-color-blue-main)"} />
                  {reviews[selectedIndex].author.role}
                </div>
              </div>
              <div className="arrows">
                <Separator color={"var(--fp-color-blue-degree-95)"} length={"32px"} />
                <div className="arrow" onClick={() => setSelectedIndex(i => (i + reviews.length - 1) % reviews.length)}>
                  <IconSimpleArrowLeft fill={"var(--fp-color-turquoise-main)"} stroke={"var(--fp-color-blue-main)"} />
                </div>
                <Separator color={"var(--fp-color-blue-degree-95)"} length={"16px"} />
                <div className="arrow" onClick={() => { setSelectedIndex(i => (i + 1) % reviews.length) }}>
                  <IconSimpleArrowRight fill={"var(--fp-color-turquoise-main)"} stroke={"var(--fp-color-blue-main)"} />
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default Reviews