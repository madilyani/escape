import React, { useState } from "react";
import RoomMobile from "components/RoomMobile";
import { calendarIcon2, userIcon2 } from "Base/SVG";
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
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 840) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 840) {
        setPosition(300);
        setMobile(true);
      } else {
        setPosition(150);
        setMobile(false);
      }
    });
  }, []);
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
                <div className="roomItemInfo__row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
