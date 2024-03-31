import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const gallerySlides = [
  {
    id: "1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  ",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  ",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: "/images/cards/6.jpg",
  },
];
const gallerySwipes = [
  {
    id: "1",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    image: "/images/cards/6.jpg",
  },
  {
    id: "1",
    image: "/images/cards/7.png",
  },
  {
    id: "2",
    image: "/images/cards/5.jpg",
  },
  {
    id: "3",
    image: "/images/cards/6.jpg",
  },
];
export default function GallerySlider({ setGallerySlider }) {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    arrows: true,
    fade: true,
    cssEase: "linear",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider2.current,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings2 = {
    slidesToShow: 14,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    loop: true,
    focusOnSelect: true,
    asNavFor: slider1.current,
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const closeModal = (e) => {
    if (e.target === e.currentTarget) setGallerySlider(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0 }}
      className="galleryModal"
      onClick={closeModal}
    >
      <div className="galleryModal__close" onClick={closeModal}></div>
      <div className="galleryModal__inner">
        <div className="galleryModal__slider-wrapper">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            className="galleryModal__slider"
          >
            <div className="gallerySlide">
              <div className="gallerySlide__inner">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/hQ0n9gxAAmc?si=P2JubdjUUtFU4Ng_"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {gallerySlides.map((item, index) => {
              return <GallerySlide {...item} key={index} />;
            })}
          </Slider>
        </div>
        <Slider
          {...settings2}
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          className="galleryModal__swiper"
        >
          <div className="gallerySwipe">
            <div className="gallerySwipe__inner">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hQ0n9gxAAmc?si=P2JubdjUUtFU4Ng_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {gallerySwipes.map((item, index) => {
            return <GallerySwipe {...item} key={index} />;
          })}
        </Slider>
      </div>
    </motion.div>
  );
}
const GallerySlide = (props) => {
  return (
    <div className="gallerySlide">
      <div className="gallerySlide__inner">
        <img src={props.image} alt="" />
        <div className="gallerySlide__content">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};
const GallerySwipe = (props) => {
  return (
    <div className="gallerySwipe">
      <div className="gallerySwipe__inner">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};
