import { hotelList } from "Base/hotelList";
import FlexibleDates from "components/FlexibleDates";
import Gallery from "components/Gallery";
import HotelInfo from "components/HotelInfo";
import MapDetail from "components/MapDetail";
import Navigation from "components/Navigation";
import Reason from "components/Reason";
import RoomDetail from "components/RoomDetail";
import Services from "components/Services";
import Similar from "components/Similar";
import Transport from "components/Transport";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const [card, setCard] = useState(null);
  const { cardId } = useParams();

  useEffect(() => {
    if (cardId) {
      setCard(hotelList?.filter((item) => item?.id === cardId)[0]);
    }
  }, [cardId]);
  return (
    <>
      <div className="breadcrumb">
        <div className="auto__container">
          <ul className="breadcrumb__inner">
            <li>
              <Link to="/">Home</Link>
            </li>{" "}
            <li>
              <Link to="/">Italy</Link>
            </li>{" "}
            <li>Ischia</li>
          </ul>
        </div>
      </div>
      <div className="anchor" id="foto"></div>
      <Gallery card={card} />
      <Navigation card={card} />
      <div className="detail">
        <div className="auto__container"></div>
      </div>
      <div className="main__wrapper">
        <Reason />
        <div className="anchor" id="stanze"></div>
        <RoomDetail />
        <div className="anchor" id="transporti"></div>
        <Transport />
      </div>
      <Services />
      <div className="anchor" id="info"></div>

      <HotelInfo />
      <FlexibleDates />
      <div className="anchor" id="map"></div>
      <MapDetail />
      <Similar card={card} />
    </>
  );
}
