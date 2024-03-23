import React, { useEffect, useState } from "react";
import { adultIcon, babyIcon, bedIcon, filterIcon, searchIcon } from "Base/SVG";
import SearchPopupMobile from "components/SearchPopupMobile";
import { AnimatePresence } from "framer-motion";

export default function SearchMobile() {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active === true) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [active]);
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      document.body.classList.remove("active");
      setActive(false);
    }
  };
  return (
    <>
      <div className="searchMob__outer">
        <div className="auto__container">
          <div className="searchMob">
            <div className="searchMob__inner">
              <div
                className="searchMob__btn"
                onClick={() => setActive(!active)}
              >
                <div className="searchMob__btn-inner">
                  <div className="searchMob__btn-icon">{searchIcon}</div>
                  <div className="searchMob__btn-text">
                    <h6>Milan</h6>
                    <p>
                      24 Marzo - 29 Marzo <small>(3 notti • 4 Giorni)</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="searchMob__filter">
                {filterIcon}
                <span>
                  Filtri <small>(22)</small>
                </span>
              </div>
            </div>
          </div>
          <div className="searchMob__btn-room">
            <span>{adultIcon} 2 adulti</span>
            <span>{babyIcon} 1 Bambino</span>
            <span>{bedIcon} 1 Stanza</span>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {active && <SearchPopupMobile closeModal={closeModal} />}
      </AnimatePresence>
    </>
  );
}
