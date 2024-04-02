import {
  heart,
  heartEmp,
  heartIcon,
  locationIcon,
  shareIcon,
  starIcon,
} from "Base/SVG";
import React, { useState } from "react";

export default function DetailHead({ card }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="detailHead">
      <div className="detailHead__content">
        <h6>AV Isola Verde Terme e Spa</h6>
        <div className="detailHead__content-row">
          <div className="detailHead__content-stars">
            {starIcon} {starIcon}
            {starIcon} {starIcon}
            {starIcon}
          </div>
          <p>Campania, Forio d’Ischia</p>
        </div>
      </div>
      <div className="detailHead__links">
        <a href="#map">{locationIcon}</a>
        <button
          type="button"
          className={"detailHead__like " + (isLiked ? "active" : "")}
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? heart : heartIcon}
        </button>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(
              `https://escape-azure.vercel.app/detail/${card?.id}`
            );
          }}
        >
          {shareIcon}
        </button>
      </div>
    </div>
  );
}
