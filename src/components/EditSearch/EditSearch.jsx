import Calendar from "components/Calendar";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CalendarMobile from "components/CalendarMobile";
import EditSearchRoom from "components/EditSearchRoom";
import moment from "moment";

export default function EditSearch({ setEditSearch, setForm }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [pos, setPos] = useState({
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
  const updatePos = (data) => {
    setPos((pos) => ({ ...pos, ...data }));
  };
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setEditSearch(false);
  };
  useEffect(() => {
    if (pos.startDate !== null && pos.endDate !== null) {
      setShowCalendar(false);
    }
  }, [pos.startDate, pos.endDate]);

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
              <input
                type="text"
                value={
                  pos?.startDate ? moment(pos?.startDate).format("DD MMM") : ""
                }
                readOnly
                placeholder="Seleziona Data"
              />
            </div>
            <hr />
            <div className="editSearch__date">
              <h6>check Out</h6>
              <input
                type="text"
                readOnly
                placeholder="Seleziona Data"
                value={
                  pos?.endDate ? moment(pos?.endDate).format("DD MMM") : ""
                }
              />
            </div>
          </div>
          {showCalendar && (
            <CalendarMobile
              isDetail={true}
              form={pos}
              setActiveInput={setActiveInput}
              updateForm={updatePos}
              setShowCalendar={setShowCalendar}
            />
          )}
          <EditSearchRoom form={pos} updateForm={updatePos} />
        </div>
        <div className="editSearch__foot">
          <button
            type="button"
            className="button primary"
            onClick={() => {
              setForm(pos);

              setEditSearch(false);
            }}
          >
            aggiorna ricerca
          </button>
        </div>
      </div>
    </motion.div>
  );
}
