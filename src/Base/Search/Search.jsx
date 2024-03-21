import React, { useState } from "react";
import Where from "./Where";
import Room from "./Room";
import { searchIcon2 } from "../SVG";
import Calendar from "./Calendar";

export default function Search() {
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
  console.log("form", form);
  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  return (
    <div className="search">
      <div className="search__inner">
        <div className="search__items">
          <Where
            form={form}
            updateForm={updateForm}
            showCalendar={showCalendar}
          />
          <div
            className={
              "searchItem " + (activeInput === "checkIn" ? "active" : "")
            }
            onClick={() => {
              setShowCalendar(true);
              setActiveInput("checkIn");
            }}
          >
            <div className="searchItem__title">Check In</div>
            <div className="searchItem__input">
              <input
                placeholder="Select Date"
                type="text"
                readOnly
                value={form?.startDate && form?.startDate.toLocaleDateString()}
              />
            </div>
          </div>
          <div
            className={
              "searchItem " + (activeInput === "checkOut" ? "active" : "")
            }
            onClick={() => {
              if (form?.startDate) {
                setShowCalendar(true);
                setActiveInput("checkOut");
              }
            }}
          >
            <div className="searchItem__title">Check Out</div>
            <div className="searchItem__input">
              <input
                placeholder="Select Date"
                type="text"
                readOnly
                value={form?.endDate && form?.endDate.toLocaleDateString()}
              />
            </div>
          </div>
          <Room
            form={form}
            updateForm={updateForm}
            showCalendar={showCalendar}
          />
        </div>
        <button type="button" className="search__btn">
          {searchIcon2}
        </button>
        {showCalendar && (
          <Calendar
            form={form}
            updateForm={updateForm}
            setActiveInput={setActiveInput}
            setShowCalendar={setShowCalendar}
          />
        )}
      </div>
    </div>
  );
}
