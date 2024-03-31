import React from "react";

export default function Navigation({ card, roomSelected }) {
  return (
    <div className="navigation__outer">
      <div className="navigation" id="navi">
        <div className="auto__container">
          <div className="navigation__inner">
            <div className="navigation__inner-links">
              <a className="links active" href="#foto">
                Panoramica e Foto
              </a>
              <a className="links" href="#stanze">
                Stanze
              </a>
              <a className="links" href="#transporti">
                Trasporti
              </a>
              <a className="links" href="#info">
                Info sull’Hotel
              </a>
              <a className="links" href="#map">
                Mappa
              </a>
            </div>
            <div className="navigationInfo">
              {!roomSelected ? (
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
                      {roomSelected?.total}€
                    </div>
                  </div>
                  <button type="button">prosegui</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
