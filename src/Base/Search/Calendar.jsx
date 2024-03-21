import React, { useState } from "react";
import { cancel } from "../SVG";
import DatePicker from "react-datepicker";

export default function Calendar({
  form,
  updateForm,
  setActiveInput,
  setShowCalendar,
}) {
  const [tab, setTab] = useState("dates");
  const onChange = (dates) => {
    const [start, end] = dates;
    updateForm({ startDate: start, endDate: end });
    if (start && !end) {
      setActiveInput("checkOut");
    }
  };
  return (
    <div className="calendar">
      <div className="calendar__inner">
        <div className="calendar__head">
          <div className="calendar__head-title">
            <h6>Select your dates</h6>
            <p>See prices and availability for your dates</p>
          </div>
          <div
            className="calendar__head-close"
            onClick={() => {
              setShowCalendar(false);
              setActiveInput(null);
            }}
          >
            {cancel}
          </div>
        </div>
        <div className="calendar__tabs">
          <button
            type="button"
            className={"calendar__tab " + (tab === "dates" ? "active" : "")}
            onClick={() => setTab("dates")}
          >
            Dates
          </button>
          <button
            type="button"
            className={"calendar__tab " + (tab === "flexible" ? "active" : "")}
            onClick={() => setTab("flexible")}
          >
            Flexible
          </button>
        </div>
        <div className="calendar__content">
          <div className="calendar__content-inner">
            {tab === "dates" && (
              <DatePicker
                selected={form.startDate}
                onChange={onChange}
                startDate={form.startDate}
                endDate={form.endDate}
                selectsRange
                inline
                monthsShown={2}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
