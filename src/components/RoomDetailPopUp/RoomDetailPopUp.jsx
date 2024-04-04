import { telegramIcon } from "Base/SVG";
import React from "react";
import { motion } from "framer-motion";

export default function RoomDetailPopUp({ roomSelected, form2 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 10 }}
      className="roomPop"
    >
      <div className="roomPop__inner">
        <div className="roomPop__price">
          <h5>{roomSelected ? roomSelected?.total + "€" : "163€"}</h5>
          {roomSelected ? <p>prezzo totale</p> : <p>prezzo per notte</p>}
          {roomSelected &&
            form2?.type !== "" &&
            form2?.type !== null &&
            form2?.type !== "first" && (
              <motion.h6
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <span>+{form2?.price}€</span> con viaggio
              </motion.h6>
            )}
        </div>
        <div className="roomPop__foot">
          {roomSelected ? (
            <div className="roomPop__foot-btns">
              <button className="roomPop__foot-btn">{telegramIcon}</button>
              <button className="button primary">Prosegui</button>
            </div>
          ) : (
            <button
              className="button primary"
              onClick={() => {
                const roomOuter = document.getElementById("roomOuter");
                const roomSection = document.getElementById("roomSection");
                window.scrollTo(
                  0,
                  roomOuter.offsetTop + roomSection?.offsetTop - 70.38
                );
              }}
            >
              Scegli Stanza
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
