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

            <div
              className="searchPopDates"
              onClick={() => {
                setShowCalendar(true);
              }}
            >
              check in
            </div>
            <RoomMobile
              form={form}
              updateForm={updateForm}
              showCalendar={showCalendar}
            />
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
