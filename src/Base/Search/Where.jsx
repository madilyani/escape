import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  calIcon,
  cancel,
  hotelIcon,
  locationIcon2,
  locationIcon3,
} from "../SVG";

const list = [
  {
    id: "1",
    title: "Barano d’Ischia",
    description: "Campania · Italia",
    icon: locationIcon2,
  },
  {
    id: "2",
    title: "Hotel San Giorgio Terme",
    description: "Barano d’Ischia · Italia",
    icon: hotelIcon,
    addClass: "hotel",
  },
  {
    id: "3",
    title: "Campania Mare",
    description: "Campania · Italia",
    icon: locationIcon2,
  },
  {
    id: "4",
    title: "Campania",
    description: "Italia",
    icon: locationIcon3,
  },
  {
    id: "5",
    title: "Capodanno",
    description: "Pacchetti Evento",
    icon: calIcon,
    addClass: "hotel",
  },
];

export default function Where({ form, updateForm, showCalendar }) {
  const [searchValue, setSearchValue] = useState("");
  const [autoCompleteList, setAutoCompleteList] = useState(list);
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const delAll = () => {
    updateForm({ where: "" });
    setSearchValue("");
  };
  const categoryClickFunc = (item) => {
    updateForm({ where: item.title });
    setSearchValue(item.title);
    setActive(false);
  };
  const searchListFunc = (text) => {
    return list?.filter((item) =>
      item.title.toUpperCase().startsWith(text.toUpperCase())
    );
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    const list2 = searchListFunc(e.target.value);
    setAutoCompleteList(list2);
  };
  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) setActive(false);
    };
    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);

  return (
    <div className={"searchItem " + (active ? "active" : "")} ref={wrapper}>
      <div className="searchItem__title">Dove vuo i andare?</div>
      <div className="searchItem__input">
        <input
          className="pr"
          placeholder="Search Hotel or Place"
          type="text"
          value={searchValue}
          onChange={handleChange}
          onFocus={() => {
            if (!showCalendar) {
              setActive(true);
              setAutoCompleteList(list);
            }
          }}
        />
        {form?.where !== "" && (
          <>
            <button type="button" onClick={delAll}>
              {cancel}
            </button>
          </>
        )}
      </div>
      <AnimatePresence>
        {active === true && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: 10 }}
            className={`searchItem__popular  ${active ? "active" : ""} `}
          >
            <div className="searchItem__popular-title">
              Popular Destinations
            </div>
            <div className="searchItem__popular-inner">
              {autoCompleteList?.length > 0 ? (
                autoCompleteList?.map((item, index) => {
                  return (
                    <div
                      className={"searchItem__popular-option"}
                      key={index}
                      onClick={() => categoryClickFunc(item)}
                    >
                      <div
                        className={
                          "searchItem__popular-option-icon " +
                          (item?.addClass ? item?.addClass : "")
                        }
                      >
                        {item.icon}
                      </div>
                      <div className="searchItem__popular-option-content">
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="searchItem__popular-option">Nothing found</div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
