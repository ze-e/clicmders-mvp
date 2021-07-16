import React from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";

function Gallery({subtitle, items}){

  return(
    <section className="gallery" id="goats">
    <h2 className="gallery__title">My Goats:</h2>
    <h4 className="gallery__subtitle">Here are some of my goats. You can add your own goats, too!
      <br/><br/>
      {subtitle}
    </h4>
    <ul className="gallery__grid">
      {items.length > 0 ? items.map((item,index)=>
        <li className="gallery-item" key={index}>
          <GalleryItem item={item}/>
        </li>
      ):<p className="gallery__loading">Loading goats . . . </p>}
   </ul> 
    </section>
  )
}

export default Gallery;