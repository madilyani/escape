import React, { useState } from "react";
import { motion } from "framer-motion";
import { cancel } from "../../SVG";
import Where from "./Where";
import Calendar from "./Calendar";
import Room from "./Room";

export default function SearchPop({ closeModal }) {
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
      <motion.div
        onClick={closeModal}
        className="searchPop"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: 10 }}
      >
        <div className="searchPop__inner">
          <div className="searchPop__head">
            <h4>modifica ricerca</h4>
            <button type="button" onClick={closeModal}>
              {cancel}
            </button>
          </div>
          <Where form={form} updateForm={updateForm} />
          <div className="searchPopDates">
            <div
              className={
                "searchPopDate " + (activeInput === "checkIn" ? "active" : "")
              }
              onClick={() => {
                setShowCalendar(true);
                setActiveInput("checkIn");
              }}
            >
              <div className="searchPopDate__title">Check In</div>
              <div className="searchPopDate__input">
                <input
                  placeholder="Select Date"
                  type="text"
                  readOnly
                  value={
                    form?.startDate && form?.startDate.toLocaleDateString()
                  }
                />
              </div>
            </div>
            <div
              className={
                "searchPopDate " + (activeInput === "checkOut" ? "active" : "")
              }
              onClick={() => {
                if (form?.startDate) {
                  setShowCalendar(true);
                  setActiveInput("checkOut");
                }
              }}
            >
              <div className="searchPopDate__title">Check Out</div>
              <div className="searchPopDate__input">
                <input
                  placeholder="Select Date"
                  type="text"
                  readOnly
                  value={form?.endDate && form?.endDate.toLocaleDateString()}
                />
              </div>
            </div>
          </div>
          <Room
            form={form}
            updateForm={updateForm}
            showCalendar={showCalendar}
          />
          <div className="searchPop__foot">
            <button
              type="button"
              className="button primary"
              onClick={closeModal}
            >
              aggiorna ricerca
            </button>
          </div>
        </div>
      </motion.div>
      {showCalendar && (
        <Calendar
          form={form}
          updateForm={updateForm}
          setActiveInput={setActiveInput}
          setShowCalendar={setShowCalendar}
        />
      )}
    </>
  );
}
