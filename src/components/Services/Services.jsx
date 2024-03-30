import React, { useEffect, useState } from "react";
import {
  cupIcon,
  imageIcon,
  petIcon,
  poolIcon,
  spaCat,
  tickIcon,
  wifiCat,
} from "Base/SVG";

export default function Services() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 541) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 541) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  return (
    <section className="services">
      <div className="auto__container">
        <div className="services__inner">
          <div className="services__inner-title">
            <h4>Servizi</h4>
            <div className="servicesBtn">Vedi tutti</div>
          </div>
          {mobile ? (
            <div className="services__inner-content">
              <div className="servicesCard active">
                <div className="servicesCard__icon">{poolIcon}</div>
                <p>Swimming Pool</p>
              </div>
              <div className="servicesCard active">
                <div className="servicesCard__icon">{cupIcon}</div>
                <p>Restaurant</p>
              </div>
              <div className="servicesCard">
                <div className="servicesCard__icon">{wifiCat}</div>
                <p>Free Internet Access</p>
              </div>
              <div className="servicesCard">
                <div className="servicesCard__icon">{spaCat}</div>
                <p>Spa</p>
              </div>
              <div className="servicesCard active">
                <div className="servicesCard__icon">{spaCat}</div>
                <p>Fitness Center</p>
              </div>
              <div className="servicesCard">
                <div className="servicesCard__icon">{petIcon}</div>
                <p>Pets Allowed</p>
              </div>
            </div>
          ) : (
            <div className="services__inner-row">
              <div className="services__inner-col">
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                    <button type="button">
                      <span>{imageIcon}</span>
                      (1)
                    </button>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="services__inner-col">
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                    <button type="button">
                      <span>{imageIcon}</span>
                      (1)
                    </button>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="services__inner-col">
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="services__inner-col">
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                    <button type="button">
                      <span>{imageIcon}</span>
                      (1)
                    </button>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
                <div className="servicesItem">
                  <div className="servicesItem__title">
                    <h5>Servizi Stanze</h5>
                  </div>
                  <ul className="servicesItem__list">
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                    <li>
                      {tickIcon}
                      <p>Disponibili camere anallergiche</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
