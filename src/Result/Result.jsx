import React, { useEffect, useState } from "react";
import Note from "../Base/Note";
import Filter from "../Base/Filter/Filter";
import Card from "../Base/Card";
import { hotelList } from "../Base/hotelList";
import Search from "../Base/Search/Search";
import { Link } from "react-router-dom";
import SearchMob from "../Base/Search/SearchMob/SearchMob";

export default function ResultMap() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 840) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 840) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  return (
    <>
      {mobile ? <SearchMob /> : <Search />}
      <Note />
      <div className="result">
        <div className="auto__container">
          <div className="result__inner">
            <div className="resultSide">
              <Filter />
            </div>
            <div className="note mob">
              <h6>42 Hotel trovati a Ischia, italia</h6>
              <div className="note__inner">
                <h5 className="cap">
                  Registrati Adesso per Accedere a sconti esclusivi
                </h5>
                <Link to="" className="button secondary">
                  Accedi / Iscriviti
                </Link>
              </div>
            </div>
            <div className="resultMain">
              <div className="resultMain__head">
                <span> Ordina per: </span>
                <select name="" id="">
                  <option value="0">Consigliati per te</option>
                  <option value="1">Option 2</option>
                  <option value="2">Option 3</option>
                </select>
              </div>
              <div className="resultMain__inner">
                {hotelList.map((item, index) => {
                  return <Card {...item} key={index} />;
                })}
                <button type="button" className="resultLoad">
                  Carica Altri 25 Hotel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
