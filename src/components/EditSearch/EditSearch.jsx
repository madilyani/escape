import Calendar from "components/Calendar";
import React, { useState } from "react";

export default function EditSearch() {
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
    <div className="editSearch">
      <div className="editSearch__inner">
        <div className="editSearch__head">
          <h5>modifica ricerca</h5>
          <div className="editSearch__close"></div>
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
            <Calendar
              form={form}
              setActiveInput={setActiveInput}
              updateForm={updateForm}
              setShowCalendar={setShowCalendar}
            />
          )}
          <div className="editSearch__row">
            <div className="editSearch__room">
              <h6>Adults</h6>
              <input type="text" placeholder="3" />
            </div>
            <div className="editSearch__room">
              <h6>Children</h6>
              <input type="text" placeholder="2" />
            </div>
            <div className="editSearch__room">
              <h6>Room</h6>
              <input type="text" placeholder="1" />
            </div>
          </div>
        </div>
        <div className="editSearch__foot">
          <button type="button" className="button primary">
            aggiorna ricerca
          </button>
        </div>
      </div>
    </div>
  );
}
