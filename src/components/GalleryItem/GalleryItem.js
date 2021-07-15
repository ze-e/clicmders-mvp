function GalleryItem(props){

  const my = props.item;

  return(
    <>
      <h3 className="gallery-item__title">{my.title}</h3>
      <img className="gallery-item__img" src={my.img} />
      <p className="gallery-item__description">{my.description}</p>
    </>
  )
}

export default GalleryItem;