import { heart, heartEmp, shareIcon } from "Base/SVG";
import React, { useState } from "react";

export default function Gallery({ card }) {
  return (
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
