import React from "react";

export default function RoomDetailPopUp() {
  return (
    <div className="roomPop">
      <div className="roomPop__row"></div>
      <div className="roomPop__price">
        <h5>
          <small>hotel</small> 3.270€
        </h5>
        <h6>con viaggio +240€</h6>
      </div>
      <div className="roomPop__foot">
        <button className="button primary">Prosegui</button>
        <a href="#" className="roomPop__link">
          invia preventivo per mail
        </a>
      </div>
    </div>
  );
}
