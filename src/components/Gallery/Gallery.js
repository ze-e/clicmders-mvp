import React from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";

function Gallery(props){

  return(
    <>
    <h2 className="gallery__title">My Goats:</h2>
    <h4 className="gallery__subtitle">{props.subtitle}</h4>
    <ul className="gallery__grid">
      {props.items.length > 0 ? props.items.map((item,index)=>
        <li className="gallery-item" key={index}>
          <GalleryItem item={item}/>
        </li>
      ):<p className="gallery__loading">Loading goats . . . </p>}
   </ul> 
    </>
  )
}

export default Gallery;