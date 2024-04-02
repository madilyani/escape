import React, { useEffect, useState } from "react";
import { calendarIcon } from "Base/SVG";
import { motion } from "framer-motion";
import Slider from "react-slick";
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
  {
    id: "4",
    date: "Mar 9 - Mar 18",
    day: "Sab - Lun • 8 notti",
    price: "156€",
    save: "76€",
  },
  {
    id: "5",
    date: "Mar 8 - Mar 17",
    day: "Ven - Dom • 8 notti",
    price: "180€",
    save: "52€",
  },
  {
    id: "6",
    date: "Mar 8 - Mar 17",
    day: "Ven - Dom • 8 notti",
    price: "180€",
    save: "52€",
  },
];

export default function FlexibleDates() {
  const [faq, setFaq] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flexibleDates__wrapper">
      <div className="auto__container">
        <div className="flexibleDates">
          <div
            className={"flexibleDates__head " + (faq ? "active" : "")}
            onClick={() => {
              setFaq(!faq);
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 2000);
            }}
          >
            <div className="flexibleDates__head-icon">{calendarIcon}</div>
            <div className="flexibleDates__head-text">
              <h5>Date Flessibili?</h5>
              <p>Compara prezzi e risparmia</p>
            </div>
          </div>
          {faq &&
            (isLoading ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
                className="flexibleDates__body"
              >
                <Slider {...settings} className="flexibleDates__body-slider">
                  {[0, 1, 2, 3].map((item, index) => {
                    return (
                      <a href="#" className="flexibleDates__item" key={index}>
                        <div className="flexibleDates__item-col">
                          <h6 className="placeholder"></h6>
                          <p className="placeholder"></p>
                        </div>
                        <div className="flexibleDates__item-col">
                          <h5 className="placeholder"></h5>
                          <p className="placeholder"></p>
                        </div>
                      </a>
                    );
                  })}
                </Slider>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                exit={{ opacity: 0 }}
                className="flexibleDates__body"
              >
                <Slider {...settings} className="flexibleDates__body-slider">
                  {flexibleDatesList.map((item, index) => {
                    return <FlexibleDatesItem {...item} key={index} />;
                  })}
                </Slider>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
const FlexibleDatesItem = (props) => {
  return (
    <a href="#" className="flexibleDates__item">
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
    </a>
  );
};
