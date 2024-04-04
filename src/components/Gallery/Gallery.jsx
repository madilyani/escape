import React, { useEffect, useRef, useState } from "react";
import { cameraIcon, heart, heartEmp, shareIcon } from "Base/SVG";

export default function Gallery({ card, setGallerySlider }) {
  return (
    <>
      <div className="gallery">
        <div className="auto__container">
          <div className="gallery__inner">
            <GalleryItem {...card?.gallery[0]} btns={true} cardId={card?.id} />
            {card?.gallery?.slice(1, 5)?.map((item, index) => {
              return (
                <GalleryItem
                  {...item}
                  setGallerySlider={setGallerySlider}
                  key={index}
                  index={index}
                  gallery={card?.gallery}
                />
              );
            })}
          </div>
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
          <button
            type="button"
            className="galleryItem__share"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://escape-azure.vercel.app/detail/${props?.cardId}`
              );
            }}
          >
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
            <button
              type="button"
              className="galleryItem__over"
              onClick={() => props.setGallerySlider(true)}
            >
              {cameraIcon} Galerria ({props?.gallery?.length}) 
            </button>
          </>
        )}
      </div>
    </div>
  );
};
