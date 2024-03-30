import React from "react";

export default function Navigation({ card }) {
  return (
    <div className="navigation">
      <div className="auto__container">
        <div className="navigation__inner">
          <div className="navigation__inner-links">
            <a className="active" href="">
              Panoramica e Foto
            </a>
            <a href="">Stanze</a>
            <a href="">Trasporti</a>
            <a href="">Info sull’Hotel</a>
            <a href="">Mappa</a>
          </div>
          <div className="navigationInfo">
            {card?.selection ? (
              <>
                <div className="navigationInfo__prices">
                  <div className="navigationInfo__price">
                    <span>hotel </span>
                    {card?.price}€
                  </div>
                  <div className="navigationInfo__extra">
                    con viaggio da +{card?.discount}€
                  </div>
                </div>
                <button className="active" type="button">
                  vedi opzioni
                </button>
              </>
            ) : (
              <>
                <div className="navigationInfo__prices">
                  <div className="navigationInfo__price">
                    <span>hotel </span>
                    {card?.price}€
                  </div>
                </div>
                <button type="button">prosegui</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
