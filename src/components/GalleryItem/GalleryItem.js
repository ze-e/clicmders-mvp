function GalleryItem({title, img, description}){


  return(
    <>
      <h3 className="gallery-item__title">{title}</h3>
      <div className="gallery-item__img-container">
        <img className="gallery-item__img" src={img} alt={title} />
      </div>
      <p className="gallery-item__description">{description}</p>
    </>
  )
}

export default GalleryItem;