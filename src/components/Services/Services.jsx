import React, { useEffect, useState } from "react";
import { imageIcon, tickIcon } from "Base/SVG";

export default function Services({ setGallerySlider }) {
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
    <>
      {mobile ? (
        <div className="servicesMob">
          <div className="servicesMob__title">
            <h5>SERVIZI</h5>
            <div className="servicesMob__close"></div>
          </div>
          <div className="servicesMob__inner">
            <div className="services__inner-col">
              <div className="servicesItem">
                <div className="servicesItem__title">
                  <h5>Servizi Stanze</h5>
                  <button type="button" onClick={() => setGallerySlider(true)}>
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
                  <button type="button" onClick={() => setGallerySlider(true)}>
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
          </div>
        </div>
      ) : (
        <section className="services">
          <div className="auto__container">
            <div className="services__inner">
              <div className="services__inner-title">
                <h4>Servizi</h4>
                <div className="servicesBtn">Vedi tutti</div>
              </div>
              <div className="services__inner-row">
                <div className="services__inner-col">
                  <div className="servicesItem">
                    <div className="servicesItem__title">
                      <h5>Servizi Stanze</h5>
                      <button
                        type="button"
                        onClick={() => setGallerySlider(true)}
                      >
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
                      <button
                        type="button"
                        onClick={() => setGallerySlider(true)}
                      >
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
                      <button
                        type="button"
                        onClick={() => setGallerySlider(true)}
                      >
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
            </div>
          </div>
        </section>
      )}
    </>
  );
}
