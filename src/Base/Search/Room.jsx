import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cancel, minusIcon, plusIcon } from "../SVG";

export default function Room({ form, updateForm }) {
  const wrapper = useRef(null);
  const [active, setActive] = useState(false);
  const delAll = () => {
    updateForm({ where: "" });
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
      <div className="searchItem__title">Stanze</div>
      <div className="searchItem__input">
        <input
          placeholder="Add guests"
          type="text"
          readOnly
          // placeholder="2 Stanze, 3 adulti"
          onFocus={() => {
            setActive(true);
          }}
        />
      </div>
      <AnimatePresence>
        {active === true && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: 10 }}
            className={`searchItem__room  ${active ? "active" : ""} `}
          >
            <div className="searchItem__room-head">
              <button type="button" className="searchItem__room-head-reset">
                Reset
              </button>
              <button type="button" className="searchItem__room-head-add">
                Add Room
              </button>
            </div>
            <div className="searchItem__room-inner">
              <div className="searchItem__room-item">
                <div className="searchItem__room-item-title">
                  Room 1 <button type="button">{cancel} </button>
                </div>
                <div className="searchItem__room-item-content">
                  <div className="searchItem__room-item-row">
                    <h6>Adults</h6>
                    <div className="searchItem__room-spinbox">
                      <div className="searchItem__room-spinbox-opr">
                        {minusIcon}
                      </div>
                      <div className="searchItem__room-spinbox-num">2</div>
                      <div className="searchItem__room-spinbox-opr">
                        {plusIcon}
                      </div>
                    </div>
                  </div>
                  <div className="searchItem__room-item-row">
                    <h6>Children</h6>
                    <div className="searchItem__room-spinbox">
                      <div className="searchItem__room-spinbox-opr">
                        {minusIcon}
                      </div>
                      <div className="searchItem__room-spinbox-num">2</div>
                      <div className="searchItem__room-spinbox-opr">
                        {plusIcon}
                      </div>
                    </div>
                  </div>
                  <div className="searchItem__room-item-age">
                    <p>Age of children on date of travel:</p>
                    <div className="searchItem__room-item-age-items">
                      <select>
                        {[
                          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                          16, 17,
                        ].map((item, index) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="searchItem__room-item">
                <div className="searchItem__room-item-title">
                  Room 1 <button type="button">{cancel} </button>
                </div>
                <div className="searchItem__room-item-content">
                  <div className="searchItem__room-item-row">
                    <h6>Adults</h6>
                    <div className="searchItem__room-spinbox">
                      <div className="searchItem__room-spinbox-opr">
                        {minusIcon}
                      </div>
                      <div className="searchItem__room-spinbox-num">2</div>
                      <div className="searchItem__room-spinbox-opr">
                        {plusIcon}
                      </div>
                    </div>
                  </div>
                  <div className="searchItem__room-item-row">
                    <h6>Children</h6>
                    <div className="searchItem__room-spinbox">
                      <div className="searchItem__room-spinbox-opr">
                        {minusIcon}
                      </div>
                      <div className="searchItem__room-spinbox-num">2</div>
                      <div className="searchItem__room-spinbox-opr">
                        {plusIcon}
                      </div>
                    </div>
                  </div>
                  <div className="searchItem__room-item-age">
                    <p>Age of children on date of travel:</p>
                    <div className="searchItem__room-item-age-items">
                      <select>
                        {[
                          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                          16, 17,
                        ].map((item, index) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
