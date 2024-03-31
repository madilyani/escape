import React, { useEffect, useRef, useState } from "react";
import { heart, heartEmp, shareIcon } from "Base/SVG";
import Slider from "react-slick";
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
export default function Gallery({ card }) {
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

  return (
    <>
      <div className="gallery">
        <div className="auto__container">
          <div className="gallery__inner">
            <GalleryItem {...card?.gallery[0]} btns={true} />
            {card?.gallery?.slice(1, 5)?.map((item, index) => {
              return (
                <GalleryItem
                  {...item}
                  key={index}
                  index={index}
                  gallery={card?.gallery}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="galleryModal">
        <div className="galleryModal__close"></div>
        <div className="galleryModal__slider-wrapper">
          <Slider
            {...settings}
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            className="galleryModal__slider"
          >
            {gallerySlides.map((item, index) => {
              return <GallerySlide {...item} key={index} />;
            })}
          </Slider>
        </div>
        <div className="galleryModal__swiper">
          <Slider
            {...settings2}
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            className="galleryModal__swiper"
          >
            {gallerySwipes.map((item, index) => {
              return <GallerySwipe {...item} key={index} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
const GalleryItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="galleryItem">
      {props?.btns && (
        <div className="galleryItem__btns">
          <button
            type="button"
            className={"galleryItem__like " + (isLiked ? "active" : "")}
            onClick={() => setIsLiked(!isLiked)}
          >
            {isLiked ? heart : heartEmp}
          </button>
          <button type="button" className="galleryItem__share">
            {shareIcon}
          </button>
        </div>
      )}
      <div className="galleryItem__inner">
        <div className="galleryItem__image">
          <img src={process.env.PUBLIC_URL + props.image} alt="image" />
        </div>
        {props?.index === 2 && props?.gallery?.length > 5 && (
          <>
            <button type="button" className="galleryItem__over">
              +{props?.gallery?.length} foto
            </button>
          </>
        )}
      </div>
    </div>
  );
};
const GallerySlide = (props) => {
  return (
    <div className="gallerySlide">
      <div className="gallerySlide__inner">
        <img src={props.image} alt="" />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hQ0n9gxAAmc?si=P2JubdjUUtFU4Ng_"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
