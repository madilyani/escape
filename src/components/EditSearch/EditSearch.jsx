import Calendar from "components/Calendar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CalendarMobile from "components/CalendarMobile";

export default function EditSearch({ setEditSearch }) {
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
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setEditSearch(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 10 }}
      className="editSearch"
      onClick={closeModal}
    >
      <div className="editSearch__inner">
        <div className="editSearch__head">
          <h5>modifica ricerca</h5>
          <div className="editSearch__close" onClick={closeModal}></div>
        </div>
        <div className="editSearch__content">
          <div
            className="editSearch__row"
            onClick={() => {
              setShowCalendar(true);
            }}
          >
            <div className="editSearch__date">
              <h6>check in</h6>
              <input type="text" placeholder="Seleziona Data" />
            </div>
            <hr />
            <div className="editSearch__date">
              <h6>check Out</h6>
              <input type="text" placeholder="Seleziona Data" />
            </div>
          </div>
          {showCalendar && (
            <CalendarMobile
              form={form}
              setActiveInput={setActiveInput}
              updateForm={updateForm}
              setShowCalendar={setShowCalendar}
            />
          )}
          <div className="editSearch__row">
            <div className="editSearch__room">
              <h6>Adults</h6>
              <input type="text" disabled={true} placeholder="3" />
            </div>
            <div className="editSearch__room">
              <h6>Children</h6>
              <input type="text" disabled={true} placeholder="2" />
            </div>
            <div className="editSearch__room">
              <h6>Room</h6>
              <input type="text" disabled={true} placeholder="1" />
            </div>
            
          </div>
        </div>
        <div className="editSearch__foot">
          <button type="button" className="button primary">
            aggiorna ricerca
          </button>
        </div>
      </div>
    </motion.div>
  );
}
