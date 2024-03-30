import { hotelList } from "Base/hotelList";
import Card from "components/Card";
import Card2 from "components/Card2";
import React, { useEffect, useState } from "react";

export default function Similar({ card }) {
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
    <div>
      {mobile ? (
        <>
          {hotelList.map((item, index) => {
            return <Card {...item} key={index} />;
          })}
        </>
      ) : (
        <>
          {hotelList.map((item, index) => {
            return <Card2 {...item} key={index} />;
          })}
        </>
      )}
    </div>
  );
}
