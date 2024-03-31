import React, { useEffect, useState } from "react";
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
import { roomModul } from "Base/roomModul";
import EditSearch from "components/EditSearch";

export default function RoomDetail({ roomSelected, setRoomSelected }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [editSearch, setEditSearch] = useState(false);
  const [roomCardPopup, setRoomCardPopup] = useState(false);
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
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 840) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 840) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  return (
    <>
      <section className="room">
        <div className="auto__container">
          <div className="room__inner">
            <div
              className="roomHead"
              onClick={() => {
                if (mobile) {
                  setEditSearch(true);
                }
              }}
            >
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
            {mobile ? (
              <>
                <div className="room__inner-col">
                  <h4>Stanze e Trattamenti</h4>
                  {roomModul.map((item, index) => {
                    return (
                      <RoomMobileItem
                        setRoomCardPopup={setRoomCardPopup}
                        roomCardPopup={roomCardPopup}
                        {...item}
                        key={index}
                      />
                    );
                  })}
                  <div className="roomSign">
                    {userIcon2}
                    <p>
                      <b>Accedi</b>o <b>Iscriviti</b> per ottenere sconti e
                      offerte esclusive
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
                      <div className="roomCard__more">
                        Vedi 3 altra opzione per questa stanza
                      </div>
                    </div>
                    <div className="roomCard__foot">
                      <p>Cancellazione gratuita entro il 25/05/2024</p>
                    </div>
                  </div>
                  <button type="button" className="room__inner-more">
                    Vedi il Resto delle Camere (3)
                  </button>
                </div>
              </>
            ) : (
              <div className="room__inner-content">
                {roomModul.map((item, index) => {
                  return (
                    <RoomItem
                      roomSelected={roomSelected}
                      setRoomSelected={setRoomSelected}
                      {...item}
                      key={index}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
      {editSearch && <EditSearch setEditSearch={setEditSearch} />}
    </>
  );
}
export const RoomItem = (props) => {
  return (
    <div className="roomItem">
      <div className="roomItem__main">
        <div className="roomItem__main-top">
          <button type="button">Vedi immagini e Descrizione</button>
          <h4>{props.title}</h4>
          {props.cancelation && (
            <p>Cancellazione gratuita entro il 25/05/2024</p>
          )}
        </div>
        <button type="button">Seleziona il viaggio</button>
      </div>
      <div className="roomItemInfo">
        {props?.categories?.map((item, index) => {
          return (
            <div className="roomItemInfo__row" key={index}>
              <div className="roomItemInfo__title">
                <h6>
                  {item.icon}
                  {item.title}
                </h6>
                <div className="roomItemChecks">
                  {item?.addons?.map((itemInner, index) => {
                    return (
                      <label className="roomItemCheck" key={index}>
                        <div className="roomItemCheck__box">
                          <input type="checkbox" />
                          <span>{tickIcon}</span>
                        </div>
                        <p>
                          {itemInner.value} <b>€ {itemInner.price}</b>{" "}
                        </p>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="roomItemInfo__side">
                <div className="roomItemInfo__prices">
                  <h5>{item.total}€</h5>
                  <p>{item.info}</p>
                  {item.demand && (
                    <p>
                      <b>A richiesta</b>
                    </p>
                  )}
                </div>
                {props?.roomSelected?.roomId === props?.id &&
                props?.roomSelected?.categories === item?.id ? (
                  <div className="button__wrapper">
                    <button type="button" className="button solid">
                      SELEZIONATA - PROSEGUI
                    </button>
                    <a href="#">invia preventivo per mail</a>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="button primary"
                    onClick={() => {
                      props.setRoomSelected({
                        roomId: props.id,
                        categories: item.id,
                        total: item.total,
                      });
                    }}
                  >
                    SELEZIONA STANZA
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const RoomMobileItem = (props) => {
  return (
    <div className="roomCard">
      <div className="roomCard__top">
        <h6>{props.title}</h6>
        <button type="button">Vedi immagine e Descrizione</button>
        {infoIcon}
      </div>
      {props?.categories?.map((item, index) => {
        return (
          <div className="roomCard__content" key={index}>
            <h6>{item.title}</h6>
            <div className="roomCard__row">
              <h5>{item.total}€</h5>
              <button type="button" className="button primary">
                SELEZIONA
              </button>
            </div>
            <p>prezzo per 7 notti e per 2 adulti</p>
            {item.addons && (
              <>
                <div className="roomItemChecks">
                  {item.addons.map((itemInner, index) => {
                    return (
                      <label className="roomItemCheck" key={index}>
                        <div className="roomItemCheck__box">
                          <input type="checkbox" />
                          <span>{tickIcon}</span>
                        </div>
                        <p>
                          {itemInner.value} <b>€{itemInner.price}</b>{" "}
                        </p>
                      </label>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}

      {props.cancelation && (
        <div className="roomCard__foot">
          <p>Cancellazione gratuita entro il 25/05/2024</p>
        </div>
      )}
    </div>
  );
};
