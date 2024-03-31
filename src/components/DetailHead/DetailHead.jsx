import { heartIcon, locationIcon, shareIcon, starIcon } from "Base/SVG";
import React from "react";

export default function DetailHead({ card }) {
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
        <a href="#">{locationIcon}</a>
        <a href="#">{heartIcon}</a>
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
