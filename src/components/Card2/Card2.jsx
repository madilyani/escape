import { calendarIcon, locationIcon, starIcon } from "Base/SVG";
import React from "react";

export default function Card2(props) {
  return (
    <a href="#" className="cardItem">
      <div className="cardItem__image">
        <div className="cardItem__type">{props.type}</div>
        <img src={props?.gallery[0]?.image} alt="" />
      </div>
      <div className="cardItem__content">
        <div className="cardItem__content-top">
          <h4>Hotel Passo Tre Croc...</h4>
          <div className="cardItem__info">
            <div className="cardItem__location">
              {locationIcon}
              <span>{props.location}</span>
            </div>
            <div className="cardItem__stars">
              {starIcon}
              {starIcon}
              {starIcon}
            </div>
          </div>
          <div className="cardItem__date">
            {calendarIcon}
            <p>
              14/07/2024 - 17/07/2024 <b>• 3 Nights</b>
            </p>
          </div>
        </div>
        <div className="cardItem__content-mid">
          <div className="cardItem__text">
            <p>{props.camera}</p>
            <p>{props.food}</p>
          </div>
          <div className="cardItem__tags">
            <div className="cardItem__tag">{props?.tags[0]?.text}</div>
            <div className="cardItem__tag">{props?.tags[1]?.text}</div>
          </div>
        </div>
        <div className="cardItem__content-foot">
          <p>per Person</p>
          <h5>250,00€</h5>
        </div>
      </div>
      <div className="card2__head"></div>
    </a>
  );
}
