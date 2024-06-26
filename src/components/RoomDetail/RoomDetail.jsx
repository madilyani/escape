import React, { useEffect, useState } from "react";
import { calendarIcon2, cancel, infoIcon, tickIcon, userIcon2 } from "Base/SVG";
import moment from "moment";
import Calendar from "components/Calendar";
import Room from "components/Room/Room";
import { roomModul, roomModulMobile } from "Base/roomModul";
import EditSearch from "components/EditSearch";
import { AnimatePresence, motion } from "framer-motion";
import RoomDetailPopUp from "components/RoomDetailPopUp";

export default function RoomDetail({
  roomSelected,
  setRoomSelected,
  setGallerySlider,
  form2,
}) {
  const [popWrap, setPopWrap] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [editSearch, setEditSearch] = useState(false);
  const [mobileModul, setMobileModul] = useState(roomModulMobile.slice(1, 3));
  const [roomCardPopup, setRoomCardPopup] = useState(null);
  const [descActive, setDescActive] = useState(false);
  const [descActive2, setDescActive2] = useState(false);
  const [descActive3, setDescActive3] = useState(null);

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
  useEffect(() => {
    if (editSearch) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [editSearch]);
  useEffect(() => {
    const scrollFunc = () => {
      const roomOuter = document.getElementById("roomOuter");
      const roomSection = document.getElementById("roomSection");
      if (
        window.scrollY >=
          roomOuter?.offsetTop +
            roomSection?.offsetTop -
            window.innerHeight / 2 &&
        window.scrollY <=
          roomOuter?.offsetTop +
            roomOuter?.offsetHeight -
            window.innerHeight / 2
      ) {
        setRoomCardPopup(false);
      } else setRoomCardPopup(true);
    };
    scrollFunc();
    window.addEventListener("scroll", scrollFunc);
  }, []);
  const closePop = (e) => {
    setDescActive(false);
    setDescActive2(false);
    setDescActive3(null);
    setPopWrap(false);
    // }
  };
  return (
    <>
      <section className="room" id="roomOuter">
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
              <div className="roomHead__items">
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
                      isDetail={true}
                      form={form}
                      setActiveInput={setActiveInput}
                      updateForm={updateForm}
                      setShowCalendar={setShowCalendar}
                      setIsDisabled={setIsDisabled}
                      disableFunc={true}
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
                    setIsDisabled={setIsDisabled}
                    disableFunc={true}
                  />
                </div>
              </div>
              <button
                className="button primary"
                disabled={isDisabled}
                onClick={() => {
                  setIsLoading(true);
                  setIsDisabled(true);
                  setShowCalendar(false);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                }}
              >
                Update search
              </button>
            </div>
            {!isLoading ? (
              mobile ? (
                <>
                  <div className="room__inner-col" id="roomSection">
                    <h4>Stanze e Trattamenti</h4>
                    <RoomMobileItem
                      roomSelected={roomSelected}
                      setRoomSelected={setRoomSelected}
                      setGallerySlider={setGallerySlider}
                      descActive2={descActive2}
                      setDescActive2={setDescActive2}
                      descActive3={descActive3}
                      setDescActive3={setDescActive3}
                      setPopWrap={setPopWrap}
                      popWrap={popWrap}
                      {...roomModulMobile[0]}
                      form2={form2}
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
                          setGallerySlider={setGallerySlider}
                          descActive2={descActive2}
                          setDescActive2={setDescActive2}
                          descActive3={descActive3}
                          setDescActive3={setDescActive3}
                          setPopWrap={setPopWrap}
                          popWrap={popWrap}
                          {...item}
                          form2={form2}
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
                        setGallerySlider={setGallerySlider}
                        {...item}
                        form2={form2}
                        key={index}
                        descActive={descActive}
                        setDescActive={setDescActive}
                        setPopWrap={setPopWrap}
                        popWrap={popWrap}
                      />
                    );
                  })}
                </div>
              )
            ) : (
              <div className="loader__outer">
                <div className="loader"></div>
              </div>
            )}
          </div>
        </div>
        <div
          className={"popWrap " + (popWrap ? "active" : "")}
          onClick={closePop}
        ></div>
      </section>
      <AnimatePresence>
        {mobile && editSearch && (
          <EditSearch setForm={setForm} setEditSearch={setEditSearch} />
        )}
        {mobile && roomCardPopup && (
          <RoomDetailPopUp roomSelected={roomSelected} form2={form2} />
        )}
      </AnimatePresence>
    </>
  );
}
export const RoomItem = (props) => {
  return (
    <div className="roomItem">
      <div className="roomItem__main">
        <div className="roomItem__main-top">
          {props?.type === "1" && (
            <button type="button" onClick={() => props.setGallerySlider(true)}>
              Vedi immagini e Descrizione
            </button>
          )}
          {props?.type === "2" && (
            <div className="cardDesc">
              <div
                className="cardDesc__btn"
                onClick={() => {
                  props.setDescActive(!props.descActive);
                  props.setPopWrap(!props.popWrap);
                }}
              >
                Vedi Descrizione
              </div>
              {props.descActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="cardDesc__body"
                >
                  <span
                    onClick={() => {
                      props.setDescActive(false);
                      props.setPopWrap(false);
                    }}
                  >
                    {cancel}
                  </span>
                  Troverai ad accoglierti all'ingresso dell 'Av Club Terme
                  Colella un pergolato ricco di piante e fiori mediterranei. La
                  struttura, simile per estetica alle ville ischitane, e' un
                  luogo familiare ed ospitale.
                </motion.div>
              )}
            </div>
          )}
          <h4>{props.title}</h4>
          {props.cancelation && (
            <p>Cancellazione gratuita entro il 25/05/2024</p>
          )}
        </div>
        <a href="#transporti">
          {props?.form2?.type === null && "Seleziona il viaggio"}
          {props?.form2?.type === "first" && "Nessun Viaggio incluso"}
          {props?.form2?.type === "second" &&
            props?.form2?.transport_type?.value +
              " da " +
              props?.form2?.place?.value +
              " +" +
              props?.form2?.price +
              "€ A Persona"}
          {props?.form2?.type === "third" &&
            props?.form2?.transport_type?.value +
              " da " +
              props?.form2?.place?.value +
              " +" +
              props?.form2?.price +
              "€ A Persona"}
          {props?.form2?.type === "fourth" &&
            props?.form2?.place?.value +
              " +" +
              props?.form2?.price +
              "€ A Persona"}
        </a>
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
                  <a
                    href="#transporti"
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
                  </a>
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
  const [category, setCategory] = useState(props.categories.slice(0, 3));
  return (
    <div className="roomCard">
      <div className="roomCard__top">
        <h6>{props.title}</h6>
        {props?.type === "1" && (
          <button type="button" onClick={() => props.setGallerySlider(true)}>
            Vedi immagini e Descrizione
          </button>
        )}
        {props?.type === "2" && (
          <div className="cardDesc">
            <div
              className="cardDesc__btn"
              onClick={() => {
                props.setDescActive2(!props.descActive2);
                props.setPopWrap(!props.popWrap);
              }}
            >
              Vedi Descrizione
            </div>
            {props.descActive2 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, height: 0 }}
                className="cardDesc__body"
              >
                <span
                  onClick={() => {
                    props.setDescActive2(false);
                    props.setPopWrap(false);
                  }}
                >
                  {cancel}
                </span>
                Troverai ad accoglierti all'ingresso dell 'Av Club Terme Colella
                un pergolato ricco di piante e fiori mediterranei. La struttura,
                simile per estetica alle ville ischitane, e' un luogo familiare
                ed ospitale.
              </motion.div>
            )}
          </div>
        )}
        <div className="roomCard__not">
          <div
            className="roomCard__not-btn"
            onClick={() => {
              props.setDescActive3(props.id);
              props.setPopWrap(!props?.popWrap);
            }}
          >
            {infoIcon}
          </div>
          {props.descActive3 === props?.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, height: 0 }}
              className="roomCard__not-body"
            >
              <span
                onClick={() => {
                  props.setDescActive3(null);
                  props.setPopWrap(false);
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
