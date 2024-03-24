import React, { useEffect, useState } from "react";
import Note from "components/Note";
import Filter from "components/Filter";
import Card from "components/Card";
import { hotelList } from "Base/hotelList";
import Search from "components/Search";
import { Link } from "react-router-dom";
import SearchMobile from "components/SearchMobile";

export default function Result() {
  const [modul, setModul] = useState(hotelList.slice(0, 5));
  const [isLoading, setIsLoading] = useState(true);
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
  console.log(modul);
  return (
    <>
      {mobile ? <SearchMobile /> : <Search />}
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
                {modul.map((item, index) => {
                  return <Card {...item} key={index} />;
                })}
                {isLoading && (
                  <div className="rsr-flex-card hotel-card-skeleton">
                    <div className="rsr-flex-left">
                      <div className="rsr-thumb-swiper"></div>
                    </div>
                    <div className="rsr-mob-top-box">
                      <div className="rsr-mob-card-img">
                        <div className="rsr-thumb-swiper"></div>
                      </div>
                      <div className="rsr-mob-card-content">
                        <h1></h1>
                        <div className="rsrf-star"></div>
                        <h5></h5>
                        <div className="rsrf-badge">
                          <span></span>
                          <span></span>
                          <span> </span>
                        </div>
                        <h4></h4>
                        <p></p>
                      </div>
                    </div>
                    <div className="rsr-flex-right">
                      <div className="rsrf-badge mob-none">
                        <span></span>
                        <span></span>
                        <span> </span>
                      </div>
                      <div className="rsrf-content">
                        <h1 className="mob-none"></h1>
                        <div className="rsrf-star mob-none"></div>
                        <h5 className="mob-none"></h5>
                        <p>
                          <span></span>
                        </p>
                        <p></p>
                        <p></p>
                      </div>

                      <h6></h6>
                      <br />
                      <h6></h6>
                      <div className="rsrf-total">
                        <div className="rsrf-tot-left">
                          <h2>
                            <span></span> <span></span>
                          </h2>
                          <h4></h4>
                        </div>
                        <div className="rsrf-tot-right">
                          <button></button>
                          <h5></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  className="resultLoad"
                  onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setModul(hotelList);
                      setIsLoading(false);
                    }, 2000);
                  }}
                >
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
