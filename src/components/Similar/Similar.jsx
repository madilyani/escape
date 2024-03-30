import { starIcon } from "Base/SVG";
import { hotelList } from "Base/hotelList";
import Card from "components/Card";
import Card2 from "components/Card2";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Similar({ card }) {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    loop: true,
    responsive: [
      {
        breakpoint: 1341,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

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
      <div className="similar">
        <div className="auto__container">
          <div className="similar__inner">
            <div className="similar__inner-stars">
              {starIcon}
              {starIcon}
              {starIcon}
            </div>
            <div className="similar__inner-title">
              <h4>Hotel simili</h4>
            </div>
            {mobile ? (
              <>
                <Slider {...settings} className="similar__inner-slider">
                  {hotelList.map((item, index) => {
                    return <Card {...item} key={index} />;
                  })}
                </Slider>
              </>
            ) : (
              <>
                <Slider {...settings} className="similar__inner-slider">
                  {hotelList.map((item, index) => {
                    return <Card2 {...item} key={index} />;
                  })}
                </Slider>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
