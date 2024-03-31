import React, { useEffect, useState } from "react";
import RoomMobile from "components/RoomMobile";
import {
  bedIcon,
  bedIcon2,
  calendarIcon2,
  cancel,
  chevronBottom,
  foodIcon,
  infoIcon,
  tickIcon,
  userIcon2,
} from "Base/SVG";
import CalendarMobile from "components/CalendarMobile";
import moment from "moment";
import Calendar from "components/Calendar";
import Room from "components/Room/Room";
import { roomModul, roomModulMobile } from "Base/roomModul";
import EditSearch from "components/EditSearch";
import { motion } from "framer-motion";
import RoomDetailPopUp from "components/RoomDetailPopUp";

export default function RoomDetail({ roomSelected, setRoomSelected }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [editSearch, setEditSearch] = useState(false);
  const [mobileModul, setMobileModul] = useState(roomModulMobile.slice(1, 3));
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
  console.log(roomModulMobile?.length, " ", mobileModul?.length + 1);
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
                  <RoomMobileItem
                    roomSelected={roomSelected}
                    setRoomSelected={setRoomSelected}
                    setRoomCardPopup={setRoomCardPopup}
                    roomCardPopup={roomCardPopup}
                    {...roomModulMobile[0]}
                  />
                  <div className="roomSign">
                    {userIcon2}
                    <p>
                      <b>Accedi</b>o <b>Iscriviti</b> per ottenere sconti e
                      offerte esclusive
                    </p>
                  </div>
                  {mobileModul.map((item, index) => {
                    return (
                      <RoomMobileItem
                        roomSelected={roomSelected}
                        setRoomSelected={setRoomSelected}
                        setRoomCardPopup={setRoomCardPopup}
                        roomCardPopup={roomCardPopup}
                        {...item}
                        key={index}
                      />
                    );
                  })}
                  {mobileModul?.length + 3 <= roomModulMobile?.length && (
                    <button
                      type="button"
                      className="room__inner-more"
                      onClick={() => {
                        setMobileModul(
                          roomModulMobile.slice(1, mobileModul.length + 3)
                        );
                      }}
                    >
                      Vedi il Resto delle Camere (
                      {roomModulMobile?.length - (mobileModul?.length + 1)})
                    </button>
                  )}
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
      {mobile && editSearch && (
        <EditSearch
          form={form}
          setEditSearch={setEditSearch}
          updateForm={updateForm}
        />
      )}
      {mobile && roomCardPopup && (
        <RoomDetailPopUp
          roomSelected={roomSelected}
          setRoomCardPopup={setRoomCardPopup}
          form={form}
          setEditSearch={setEditSearch}
          updateForm={updateForm}
        />
      )}
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
  const [descActive, setDescActive] = useState(false);
  const [category, setCategory] = useState(props.categories.slice(0, 3));
  return (
    <div className="roomCard">
      <div className="roomCard__top">
        <h6>{props.title}</h6>
        <button type="button">Vedi immagine e Descrizione</button>
        <div className="roomCard__not">
          <div
            className="roomCard__not-btn"
            onClick={() => {
              setDescActive(!descActive);
            }}
          >
            {infoIcon}
          </div>
          {descActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, height: 0 }}
              className="roomCard__not-body"
            >
              <span
                onClick={() => {
                  setDescActive(false);
                  // setPopWrap(false);
                }}
              >
                {cancel}
              </span>
              Troverai ad accoglierti all'ingresso dell 'Av Club Terme Colella
              un pergolato ricco di piante e fiori mediterranei. La struttura,
              simile per estetica alle ville ischitane, e' un luogo familiare ed
              ospitale.
            </motion.div>
          )}
        </div>
      </div>
      {category?.map((item, index) => {
        return (
          <div className="roomCard__content" key={index}>
            <h6>{item.title}</h6>
            <div className="roomCard__row">
              <h5>{item.total}€</h5>
              {props?.roomSelected?.roomId === props?.id &&
              props?.roomSelected?.categories === item?.id ? (
                <button type="button" className="button solid">
                  SELEZIONATO
                </button>
              ) : (
                <a
                  href="#transporti"
                  className="button primary"
                  onClick={() => {
                    props.setRoomSelected({
                      roomId: props.id,
                      categories: item.id,
                      total: item.total,
                    });
                    props.setRoomCardPopup(true);
                  }}
                >
                  SELEZIONA
                </a>
              )}
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
      {props?.categories.length > 3 && (
        <button
          type="button"
          className="roomCard__more"
          onClick={() => {
            if (category.length <= 3) {
              setCategory(props.categories);
            } else {
              setCategory(props.categories.slice(0, 3));
            }
          }}
        >
          {category.length <= 3 ? (
            <>
              Vedi {props.categories.length - 3} altra opzione per questa stanza
            </>
          ) : (
            <>Show less</>
          )}
        </button>
      )}
      {props.cancelation && (
        <span className="roomCard__foot">
          <p>Cancellazione gratuita entro il 25/05/2024</p>
        </span>
      )}
    </div>
  );
};
