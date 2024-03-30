import React from "react";

export default function MapDetail() {
  return (
    <section className="mapDetail">
      <div className="auto__container">
        <div className="mapDetail__inner">
          <div className="mapDetail__inner-title">
            <h4>Mappa</h4>
            <p>
              <b>Veneto, Cortina d’Ampezzo</b>
              Via della neve del castello 14
            </p>
          </div>
          <div className="mapDetail__inner-image">
            <img
              src={process.env.PUBLIC_URL + "/images/detail/mapDetail.png"}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
