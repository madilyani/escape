import React, { useState } from "react";
import { calendarIcon } from "Base/SVG";
import { motion } from "framer-motion";
const flexibleDatesList = [
  {
    id: "1",
    date: "Mar 9 - Mar 18",
    day: "Sab - Lun • 8 notti",
    price: "156€",
    save: "76€",
  },
  {
    id: "2",
    date: "Mar 8 - Mar 17",
    day: "Ven - Dom • 8 notti",
    price: "180€",
    save: "52€",
  },
  {
    id: "3",
    date: "Mar 8 - Mar 17",
    day: "Ven - Dom • 8 notti",
    price: "180€",
    save: "52€",
  },
];
export default function FlexibleDates() {
  const [faq, setFaq] = useState(false);

  return (
    <div className="flexibleDates__wrapper">
      <div className="auto__container">
        <div className="flexibleDates">
          <div
            className={"flexibleDates__head " + (faq ? "active" : "")}
            onClick={() => setFaq(!faq)}
          >
            <div className="flexibleDates__head-icon">{calendarIcon}</div>
            <div className="flexibleDates__head-text">
              <h5>Date Flessibili?</h5>
              <p>Compara prezzi e risparmia</p>
            </div>
          </div>
          {faq && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0 }}
              className="flexibleDates__body"
            >
              {flexibleDatesList.map((item, index) => {
                return <FlexibleDatesItem {...item} key={index} />;
              })}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
const FlexibleDatesItem = (props) => {
  return (
    <div className="flexibleDates__item">
      <div className="flexibleDates__item-col">
        <h6>{props.date}</h6>
        <p>{props.day}</p>
      </div>
      <div className="flexibleDates__item-col">
        <h5>{props.price}</h5>
        <p className="green">
          Risparmi <b>{props.save} </b>
        </p>
      </div>
    </div>
  );
};
