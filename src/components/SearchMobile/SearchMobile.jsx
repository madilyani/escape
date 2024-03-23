import { bedIcon, calendarIcon } from "Base/SVG";
import CalendarMobile from "components/CalendarMobile";
import RoomMobile from "components/RoomMobile";
import WhereMobile from "components/WhereMobile";
import React, { useEffect, useState } from "react";

export default function SearchMobile() {
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
    <>
      <div className="searchMob__outer">
        <div className="auto__container">
          <div className="searchMob">
            <WhereMobile form={form} updateForm={updateForm} />
            <div className="searchMob__row">
              <div
                className="searchPopDates"
                onClick={() => {
                  setShowCalendar(true);
                }}
              >
                {calendarIcon}
                <div className="searchPopDates__content">
                  <h6>Check-in/out</h6>
                  <input
                    placeholder="Select Date"
                    type="text"
                    readOnly
                    value={form?.endDate && form?.endDate.toLocaleDateString()}
                  />
                </div>
              </div>
              <div className="searchMob__room">
                <RoomMobile
                  form={form}
                  updateForm={updateForm}
                  showCalendar={showCalendar}
                />
                <h6>Stanze e Ospiti</h6>
                <input
                  placeholder="Select Room"
                  type="text"
                  readOnly
                  value="2 St. 3 ad. 5 bimbi"
                />
                {bedIcon}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showCalendar && (
        <CalendarMobile
          form={form}
          updateForm={updateForm}
          setActiveInput={setActiveInput}
          setShowCalendar={setShowCalendar}
        />
      )}
    </>
  );
}
