function GalleryItem(props){

  const my = props.item;

  return(
    <>
      <h3 className="gallery-item__title">{my.title}</h3>
      <div className="gallery-item__img-container">
        <img className="gallery-item__img" src={my.img} />
      </div>
      <p className="gallery-item__description">{my.description}</p>
    </>
  )
}

export default GalleryItem;