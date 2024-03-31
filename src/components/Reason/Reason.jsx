import {
  cupIcon,
  fitnessIcon,
  imageIcon,
  locationIcon,
  petIcon,
  poolIcon,
  spaCat,
  starIcon,
  whatsappIcon,
  wifiCat,
  wifiIcon,
} from "Base/SVG";
import React from "react";

export default function Reason() {
  return (
    <section className="reason">
      <div className="auto__container">
        <div className="reason__inner">
          <div className="reasonHead">
            <div className="reasonHead__main">
              <div className="reasonHead__title">
                <h4>Hotel Passo Tre Croci</h4>
                <div className="reasonHead__title-stars">
                  {starIcon} {starIcon} {starIcon}
                </div>
              </div>
              <div className="reasonHead__info">
                <div className="reasonHead__location">
                  {locationIcon}
                  <p>Veneto, Cortina d’Ampezzo</p>
                </div>
                <button type="button">Vedi Mappa</button>
              </div>
            </div>
            <div className="reasonHead__row">
              <p>
                Dubbi riguardo questa offerta? <b>Chiamaci</b>
              </p>
              <a href="#" className="button">
                {whatsappIcon}
                WhatsApp
              </a>
            </div>
          </div>
          <div className="reason__inner-row">
            <div className="reasonDesc">
              <h5>Descrizione</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button type="button">Vedi più info sull’hotel</button>
            </div>
            <div className="reasonList">
              <h5>Le ragioni per cui Prenotare!</h5>
              <div className="reasonList__item green">
                <span>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/detail/reason/installment.png"
                    }
                    alt="image"
                  />
                </span>
                <h6>Pagamento a RatePagamento a Rate</h6>
              </div>
              <div className="reasonList__item red">
                <span>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/detail/reason/discount.png"
                    }
                    alt="image"
                  />
                </span>
                <h6>Sconto 5% Prenota Prima del 20 Sett</h6>
              </div>
              <div className="reasonList__item blue">
                <span>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/detail/reason/boy.png"
                    }
                    alt="image"
                  />
                </span>
                <h6>1 Bambino fino a 3 anni gratuito</h6>
              </div>
              <div className="reasonList__item orange">
                <span>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/detail/reason/spa.png"
                    }
                    alt="image"
                  />
                </span>
                <h6>Terme convenzionate con la struttura</h6>
              </div>
            </div>
            <div className="reasonService">
              <div className="reasonService__title">
                <h5>Servizi</h5>
                <div className="servicesBtn">Vedi tutti</div>
              </div>
              <div className="reasonService__row">
                <div className="servicesCard active">
                  <div className="servicesCard__icon">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/detail/reason/pool.png"
                      }
                      alt="image"
                    />
                    <span>{imageIcon}</span>
                    {poolIcon}
                  </div>
                  <p>Swimming Pool</p>
                </div>
                <div className="servicesCard">
                  <div className="servicesCard__icon">{cupIcon}</div>
                  <p>Restaurant</p>
                </div>
                <div className="servicesCard">
                  <div className="servicesCard__icon">{wifiIcon}</div>
                  <p>Free Internet Access</p>
                </div>
                <div className="servicesCard">
                  <div className="servicesCard__icon">{spaCat}</div>
                  <p>Spa</p>
                </div>
                <div className="servicesCard">
                  <div className="servicesCard__icon">{fitnessIcon}</div>
                  <p>Fitness Center</p>
                </div>
                <div className="servicesCard">
                  <div className="servicesCard__icon">{petIcon}</div>
                  <p>Pets Allowed</p>
                </div>
              </div>
              <button type="button">Vedi altri Servizi</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
