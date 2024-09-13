import { Fragment, useEffect, useState } from 'react'
import "./carousel-card.scss";
import Separator from './Separator';
import IconSimpleArrowLeft from '../assets/icons/IconSimpleArrowLeft';
import IconSimpleArrowRight from '../assets/icons/IconSimpleArrowRight';

function CarouselCard({ items }) {

  const [shift, setShift] = useState(0);
  const [itemsRange, setCurrentItemsRange] = useState(null);

  useEffect(() => {
    if (!items.length) {
      return;
    }
    setCurrentItemsRange([
      items[(0 + shift) % items.length],
      items[(1 + shift) % items.length],
      items[(2 + shift) % items.length],
      items[(3 + shift) % items.length],
      items[(4 + shift) % items.length],
      items[(5 + shift) % items.length],
      items[(6 + shift) % items.length],
    ])
  }, [items, shift])

  return (
    <div className='fp-comp-carousel-card'>
      {
        itemsRange &&
        <div className="container">
          <div className="images">
            {itemsRange[3].images.map((img, i) =>
              <div key={i} className='image'>
                <img src={img} alt="" />
              </div>
            )}
          </div>
          <div className="foot">
            <button className='arrow arrow-left' onClick={() => { setShift(s => s - 1 + items.length) }}>
              <IconSimpleArrowLeft fill={"var(--fp-comp-carousel-card-arrow-fill)"} stroke={"var(--fp-color-blue-main)"} />
            </button>
            <div className="titles">
              {itemsRange.map((item, i) =>
                <Fragment key={i}>
                  <div className='title fp-text-style-label-normal'>
                    {item.title}
                  </div>
                  {i + 1 < itemsRange.length && <Separator length={"16px"} color={"var(--fp-color-white)"} />}
                </Fragment>
              )
              }
            </div>
            <button className='arrow arrow-right' onClick={() => { setShift(s => s + 1) }}>
              <IconSimpleArrowRight fill={"var(--fp-comp-carousel-card-arrow-fill)"} stroke={"var(--fp-color-blue-main)"} />
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default CarouselCard