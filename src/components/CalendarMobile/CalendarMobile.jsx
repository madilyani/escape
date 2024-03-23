import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

import "react-datepicker/dist/react-datepicker.css";
import FlexibleMobile from "components/FlexibleMobile";
import { cancel } from "Base/SVG";
export default function CalendarMobile({
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
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 10 }}
      className="calendar"
    >
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
          {tab === "dates" && (
            <div className="calendar__content-inner">
              <DatePicker
                selected={form.startDate}
                onChange={onChange}
                startDate={form.startDate}
                endDate={form.endDate}
                selectsRange
                inline
                monthsShown={1}
              />
            </div>
          )}
          {tab === "flexible" && <FlexibleMobile />}
        </div>
      </div>
    </motion.div>
  );
}
