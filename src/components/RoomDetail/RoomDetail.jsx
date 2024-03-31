import React, { useState } from "react";
import RoomMobile from "components/RoomMobile";
import {
  bedIcon,
  bedIcon2,
  calendarIcon2,
  foodIcon,
  infoIcon,
  tickIcon,
  userIcon2,
} from "Base/SVG";
import CalendarMobile from "components/CalendarMobile";
import moment from "moment";
import Calendar from "components/Calendar";
import Room from "components/Room/Room";

export default function RoomDetail() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const [form, setForm] = useState({
    where: "",
    rooms: [
      {
        id: "1",
        adults: 2,
        children: 0,
        children_age: [],
      },
    ],
    startDate: null,
    endDate: null,
  });
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };

  return (
    <section className="room">
      <div className="auto__container">
        <div className="room__inner">
          <div className="roomHead">
            <div className="roomHead__item">
              {calendarIcon2}
              <div
                className="searchPopDates"
                onClick={() => {
                  setShowCalendar(true);
                }}
              >
                <div className="searchPopDates__content">
                  <h6>Check-ln Check-out</h6>
                  <input
                    placeholder="Select Date"
                    type="text"
                    readOnly
                    value={
                      (form?.startDate
                        ? moment(form?.startDate).format("DD MMM") + " - "
                        : "") +
                      (form?.endDate
                        ? moment(form?.endDate).format("DD MMM")
                        : "")
                    }
                  />
                </div>
              </div>
              {showCalendar && (
                <Calendar
                  form={form}
                  setActiveInput={setActiveInput}
                  updateForm={updateForm}
                  setShowCalendar={setShowCalendar}
                />
              )}
            </div>
            <div className="roomHead__item">
              {userIcon2}
              <Room
                form={form}
                setActiveInput={setActiveInput}
                updateForm={updateForm}
                setShowCalendar={setShowCalendar}
              />
            </div>
          </div>
          <div className="room__inner-content">
            <div className="roomItem">
              <div className="roomItem__main">
                <div className="roomItem__main-top">
                  <button type="button">Vedi immagini e Descrizione</button>
                  <h4>Stanza Doppia</h4>
                  <p>Cancellazione gratuita entro il 25/05/2024</p>
                </div>
                <button type="button">Seleziona il viaggio</button>
              </div>
              <div className="roomItemInfo">
                <div className="roomItemInfo__row">
                  <div className="roomItemInfo__title">
                    <h6>
                      {foodIcon}
                      Pensione Completa
                    </h6>
                    <div className="roomItemChecks">
                      <label className="roomItemCheck">
                        <div className="roomItemCheck__box">
                          <input type="checkbox" />
                          <span>{tickIcon}</span>
                        </div>
                        <p>
                          Vista Mare <b>€ 70</b>{" "}
                        </p>
                      </label>
                      <label className="roomItemCheck">
                        <div className="roomItemCheck__box">
                          <input type="checkbox" />
                          <span> {tickIcon} </span>
                        </div>
                        <p>
                          Culla <b>€ 25</b>{" "}
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="roomItemInfo__side">
                    <div className="roomItemInfo__prices">
                      <h5>1.270€</h5>
                      <p>Prezzo per 7 notti e per 2 adulti</p>
                      <p>
                        <b>A richiesta</b>
                      </p>
                    </div>
                    <button type="button" className="button primary">
                      SELEZIONA STANZA
                    </button>
                  </div>
                </div>
                <div className="roomItemInfo__row">
                  <div className="roomItemInfo__title">
                    <h6>
                      {bedIcon2}
                      solo pernottamento
                    </h6>
                  </div>
                  <div className="roomItemInfo__side">
                    <div className="roomItemInfo__prices">
                      <h5>1.270€</h5>
                      <p>Prezzo per 7 notti e per 2 adulti</p>
                    </div>
                    <div className="button__wrapper">
                      <button type="button" className="button solid">
                        SELEZIONATA - PROSEGUI
                      </button>
                      <a href="#">invia preventivo per mail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="roomItem">
              <div className="roomItem__main">
                <div className="roomItem__main-top">
                  <button type="button">Vedi Descrizione</button>
                  <h4>Stanza Deluxe</h4>
                </div>
                <button type="button">Seleziona il viaggio</button>
              </div>
              <div className="roomItemInfo">
                <div className="roomItemInfo__row">
                  <div className="roomItemInfo__title">
                    <h6>
                      {foodIcon}
                      Pensione Completa
                    </h6>
                  </div>
                  <div className="roomItemInfo__side">
                    <div className="roomItemInfo__prices">
                      <h5>1.270€</h5>
                      <p>Prezzo per 7 notti e per 2 adulti</p>
                      <p>
                        <b>A richiesta</b>
                      </p>
                    </div>
                    <button type="button" className="button primary">
                      SELEZIONA STANZA
                    </button>
                  </div>
                </div>
                <div className="roomItemInfo__row">
                  <div className="roomItemInfo__title">
                    <h6>
                      {bedIcon2}
                      solo pernottamento
                    </h6>
                  </div>
                  <div className="roomItemInfo__side">
                    <div className="roomItemInfo__prices">
                      <h5>1.270€</h5>
                      <p>Prezzo per 7 notti e per 2 adulti</p>
                      <p>
                        <b>A richiesta</b>
                      </p>
                    </div>
                    <button type="button" className="button primary">
                      SELEZIONA STANZA
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="room__inner-col">
            <h4>Stanze e Trattamenti</h4>
            <div className="roomCard">
              <div className="roomCard__top">
                <h6>Camera DUN Deluxe</h6>
                <button type="button">Vedi immagine e Descrizione</button>
                {infoIcon}
              </div>
              <div className="roomCard__content">
                <h6>Solo Pernottamento</h6>
                <div className="roomCard__row">
                  <h5>1.120€</h5>
                  <button type="button" className="button primary">
                    SELEZIONA
                  </button>
                </div>
                <p>prezzo per 7 notti e per 2 adulti</p>
              </div>
              <div className="roomCard__content">
                <h6>Pensione Completa</h6>
                <div className="roomCard__row">
                  <h5>1.270€</h5>
                  <button type="button" className="button primary">
                    SELEZIONA
                  </button>
                </div>
                <p>prezzo per 7 notti e per 2 adulti</p>
                <div className="roomItemChecks">
                  <label className="roomItemCheck">
                    <div className="roomItemCheck__box">
                      <input type="checkbox" />
                      <span>{tickIcon}</span>
                    </div>
                    <p>
                      Vista Mare <b>€ 70</b>{" "}
                    </p>
                  </label>
                  <label className="roomItemCheck">
                    <div className="roomItemCheck__box">
                      <input type="checkbox" />
                      <span> {tickIcon} </span>
                    </div>
                    <p>
                      Culla <b>€ 25</b>{" "}
                    </p>
                  </label>
                </div>
              </div>
              <div className="roomCard__content">
                <h6>Pensione Completa e Bevande incluse</h6>
                <div className="roomCard__row">
                  <h5>1.570€</h5>
                  <button type="button" className="button primary">
                    SELEZIONA
                  </button>
                </div>
                <p>prezzo per 7 notti e per 2 adulti</p>
                <p>
                  <b>A richiesta</b>
                </p>
              </div>
              <div className="roomCard__foot">
                <p>Cancellazione gratuita entro il 25/05/2024</p>
              </div>
            </div>
            <div className="roomSign">
              {userIcon2}
              <p>
                <b>Accedi</b>o <b>Iscriviti</b> per ottenere sconti e offerte
                esclusive
              </p>
            </div>
            <div className="roomCard">
              <div className="roomCard__top">
                <h6>Camera DUN Deluxe</h6>
                <button type="button">Vedi immagine e Descrizione</button>
                {infoIcon}
              </div>
              <div className="roomCard__content">
                <h6>Solo Pernottamento</h6>
                <div className="roomCard__row">
                  <h5>1.120€</h5>
                  <button type="button" className="button primary">
                    SELEZIONA
                  </button>
                </div>
                <p>prezzo per 7 notti e per 2 adulti</p>
              </div>
              <div className="roomCard__content">
                <h6>Pensione Completa</h6>
                <div className="roomCard__row">
                  <h5>1.270€</h5>
                  <button type="button" className="button primary">
                    SELEZIONA
                  </button>
                </div>
                <p>prezzo per 7 notti e per 2 adulti</p>
                <div className="roomItemChecks">
                  <label className="roomItemCheck">
                    <div className="roomItemCheck__box">
                      <input type="checkbox" />
                      <span>{tickIcon}</span>
                    </div>
                    <p>
                      Vista Mare <b>€ 70</b>{" "}
                    </p>
                  </label>
                  <label className="roomItemCheck">
                    <div className="roomItemCheck__box">
                      <input type="checkbox" />
                      <span> {tickIcon} </span>
                    </div>
                    <p>
                      Culla <b>€ 25</b>{" "}
                    </p>
                  </label>
                </div>
              </div>
              <div className="roomCard__content">
                <h6>Pensione Completa e Bevande incluse</h6>
                <div className="roomCard__row">
                  <h5>1.570€</h5>
                  <button type="button" className="button primary">
                    SELEZIONA
                  </button>
                </div>
                <p>prezzo per 7 notti e per 2 adulti</p>
                <p>
                  <b>A richiesta</b>
                </p>
                <div className="roomCard__more">
                  Vedi 3 altra opzione per questa stanza
                </div>
              </div>
              <div className="roomCard__foot">
                <p>Cancellazione gratuita entro il 25/05/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
