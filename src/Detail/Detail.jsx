import { hotelList } from "Base/hotelList";
import DetailHead from "components/DetailHead";
import EditSearch from "components/EditSearch";
import FlexibleDates from "components/FlexibleDates";
import Gallery from "components/Gallery";
import GallerySlider from "components/GallerySlider/GallerySlider";
import HotelInfo from "components/HotelInfo";
import MapDetail from "components/MapDetail";
import Navigation from "components/Navigation";
import Reason from "components/Reason";
import RoomDetail from "components/RoomDetail";
import Services from "components/Services";
import Similar from "components/Similar";
import Transport from "components/Transport";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const [gallerySlider, setGallerySlider] = useState(false);
  const [card, setCard] = useState(null);
  const [roomSelected, setRoomSelected] = useState(null);
  const { cardId } = useParams();
  useEffect(() => {
    if (cardId) {
      setCard(hotelList?.filter((item) => item?.id === cardId)[0]);
    }
  }, [cardId]);
  useEffect(() => {
    let startSticky = document.getElementById("startSticky");
    let navi = document.getElementById("navi");
    function scrollFunc() {
      if (window.pageYOffset >= startSticky.offsetTop) {
        navi.classList.add("sticky");
      } else {
        navi.classList.remove("sticky");
      }
    }
    const links = document.querySelectorAll(".links");
    const sections = document.querySelectorAll(".anchor");
    function changeLinkState() {
      let index = sections.length;
      while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
      links.forEach((link) => link.classList.remove("active"));
      links[index]?.classList.add("active");
    }
    window.addEventListener("scroll", () => {
      changeLinkState();
      scrollFunc();
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>{card?.title}</title>
        <meta name="description" content="description here" />
        <meta property="og:title" content={card?.title} />
        <meta property="og:description" content="Description here" />

        <meta
          property="og:image"
          content={`https://escape-azure.vercel.app${card?.gallery[0].image}`}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="image" />

        <meta name="twitter:title" content={card?.title} />
        <meta name="twitter:description" content="description here" />
        <meta
          name="twitter:image"
          content={`https://escape-azure.vercel.app${card?.gallery[0].image}`}
        />
        <meta name="twitter:image:width" content="800" />
        <meta name="twitter:image:height" content="600" />
        <meta name="twitter:image:alt" content="image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="madilyani@gmail.com" />
      </Helmet>
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
      <div className="detail">
        <div className="auto__container">
          <div className="detail__inner">
            <DetailHead card={card} />
          </div>
        </div>
      </div>

      <div className="anchor" id="foto"></div>

      <Gallery card={card} setGallerySlider={setGallerySlider} />
      <Navigation card={card} roomSelected={roomSelected} />

      <div className="main__wrapper">
        <Reason card={card} setGallerySlider={setGallerySlider} />
        <div className="anchor" id="stanze"></div>

        <RoomDetail
          roomSelected={roomSelected}
          setRoomSelected={setRoomSelected}
        />
        <div className="anchor" id="transporti"></div>
        <Transport />
      </div>
      <div className="anchors" id="services"></div>
      <Services setGallerySlider={setGallerySlider} />
      <div className="anchor" id="info"></div>

      <HotelInfo />
      <FlexibleDates />
      <div className="anchor" id="map"></div>
      <MapDetail />
      <Similar card={card} />
      {gallerySlider && <GallerySlider setGallerySlider={setGallerySlider} />}
    </>
  );
}
