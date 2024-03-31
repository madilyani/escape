import { calendarIcon2, userIcon2 } from "Base/SVG";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RoomDetailPopUp({
  form,
  setRoomCardPopup,
  setEditSearch,
}) {
  const [text, setText] = useState("");
  useEffect(() => {
    let totalAdults = 0;
    let totalChildren = 0;
    form?.rooms.forEach((element) => {
      totalAdults = totalAdults + element.adults;
      totalChildren = totalChildren + element.children;
    });

    let text =
      (form?.rooms.length > 0
        ? form?.rooms.length === 1
          ? `${form?.rooms.length} Stanza`
          : `${form?.rooms.length} Stanze`
        : ``) +
      (totalAdults > 0 ? `, ${totalAdults} Ad.` : ``) +
      (totalChildren > 0
        ? totalChildren === 1
          ? `, ${totalChildren} bambino`
          : `, ${totalChildren} bambini`
        : ``);

    setText(text);
  }, [form?.rooms]);
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setRoomCardPopup(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 10 }}
      className="roomPop"
      onClick={closeModal}
    >
      <div className="roomPop__inner">
        <div className="roomPop__row" onClick={() => setEditSearch(true)}>
          <div className="roomPop__item">
            {calendarIcon2}
            <h6>Check-ln Check-out</h6>
            <input
              placeholder="Select Date"
              type="text"
              readOnly
              value={
                (form?.startDate
                  ? moment(form?.startDate).format("DD MMM") + " - "
                  : "") +
                (form?.endDate ? moment(form?.endDate).format("DD MMM") : "")
              }
            />
          </div>
          <div className="roomPop__item">
            <h6>Stanze</h6>
            <input placeholder="Add guests" type="text" readOnly value={text} />
          </div>
        </div>
        <div className="roomPop__price">
          <h5>
            <small>hotel</small> 3.270€
          </h5>
          <h6>con viaggio +240€</h6>
        </div>
        <div className="roomPop__foot">
          <button className="button primary">Prosegui</button>
          <a href="#" className="roomPop__link">
            invia preventivo per mail
          </a>
        </div>
      </div>
    </motion.div>
  );
}
