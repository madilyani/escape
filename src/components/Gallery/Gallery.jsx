import React from "react";

export default function Gallery({ card }) {
  return (
    <div className="gallery">
      <div className="auto__container">
        <div className="gallery__inner">
          {card?.gallery.map((item, index) => {
            return <GalleryItem {...item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
const GalleryItem = (props) => {
  return (
    <div className="galleryItem">
      <div className="galleryItem__inner">
        <div className="galleryItem__image">
          <img src={process.env.PUBLIC_URL + props.image} alt="image" />
        </div>
      </div>
    </div>
  );
};
