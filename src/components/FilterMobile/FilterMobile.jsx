import React from "react";
import Rating from "components/Rating";
import Categories from "components/Categories";
import { chevronTop } from "Base/SVG";
import { locations, services, treatments } from "Base/modul";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import Evidence from "components/Evidence";

export default function FilterMobile({
  popWrap,
  setPopWrap,
  setMobDrop,
  mobDrop,
  closePop,
}) {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    loop: false,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className={"filterMob " + (popWrap ? "active" : "")}>
      <Slider {...settings} className="filterMob__slider">
        <div className="filterMobDrop">
          <div
            className={
              "filterMobDrop__btn " + (mobDrop === "rating" ? " active" : "")
            }
            onClick={() => {
              setMobDrop("rating");
              setPopWrap(true);
            }}
          >
            Filtra per Stelle {chevronTop}
          </div>
        </div>
        <div className="filterMobDrop">
          <div
            className={
              "filterMobDrop__btn " + (mobDrop === "services" ? " active" : "")
            }
            onClick={() => {
              setMobDrop("services");
              setPopWrap(true);
            }}
          >
            servizi {chevronTop}
          </div>
        </div>
        <div className="filterMobDrop">
          <div
            className={
              "filterMobDrop__btn " + (mobDrop === "location" ? " active" : "")
            }
            onClick={() => {
              setMobDrop("location");
              setPopWrap(true);
            }}
          >
            località {chevronTop}
          </div>
        </div>
        <div className="filterMobDrop">
          <div
            className={
              "filterMobDrop__btn " +
              (mobDrop === "treatments" ? " active" : "")
            }
            onClick={() => {
              setMobDrop("treatments");
              setPopWrap(true);
            }}
          >
            Trattamento {chevronTop}
          </div>
        </div>
        <div className="filterMobDrop">
          <div
            className={
              "filterMobDrop__btn " + (mobDrop === "evis" ? " active" : "")
            }
            onClick={() => {
              setMobDrop("evis");
              setPopWrap(true);
            }}
          >
            In Evidenza {chevronTop}
          </div>
        </div>
      </Slider>
      <AnimatePresence>
        {mobDrop === "rating" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="filterMobDrop__pop"
          >
            <Rating
              title="Filtra per Stelle"
              mobile={true}
              closePop={closePop}
            />
          </motion.div>
        )}
        {mobDrop === "services" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="filterMobDrop__pop"
          >
            <Categories
              modul={services}
              title="servizi"
              mobile={true}
              closePop={closePop}
            />
          </motion.div>
        )}
        {mobDrop === "location" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="filterMobDrop__pop"
          >
            <Categories
              modul={locations}
              title="località"
              mobile={true}
              closePop={closePop}
            />
          </motion.div>
        )}
        {mobDrop === "treatments" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="filterMobDrop__pop"
          >
            <Categories
              modul={treatments}
              title="Trattamento"
              mobile={true}
              closePop={closePop}
            />
          </motion.div>
        )}
        {mobDrop === "evis" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="filterMobDrop__pop"
          >
            <Evidence
              modul={treatments}
              title="In Evidenza"
              mobile={true}
              closePop={closePop}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
