import { hotelList } from "Base/hotelList";
import Gallery from "components/Gallery";
import Similar from "components/Similar";
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
      <Gallery card={card} />
      <div className="detail">
        <div className="auto__container"></div>
      </div>
      <Similar card={card} />
    </>
  );
}
