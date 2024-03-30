import { hotelList } from "Base/hotelList";
import Card2 from "components/Card2";
import React from "react";

export default function Similar({ card }) {
  return (
    <div>
      {hotelList.map((item, index) => {
        return <Card2 {...item} key={index} />;
      })}
    </div>
  );
}
