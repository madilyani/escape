import React from "react";
import Note from "../Base/Note";
import Filter from "../Base/Filter/Filter";
import Card from "../Base/Card";
import { hotelList } from "../Base/hotelList";

export default function ResultMap() {
  return (
    <>
      <Note />
      <div className="result">
        <div className="auto__container">
          <div className="result__inner">
            <div className="resultSide">
              <Filter />
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
