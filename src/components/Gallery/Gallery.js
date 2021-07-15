import GalleryItem from "../GalleryItem/GalleryItem";

function Gallery(props){
  
  return(
    <>
    <h2 className="gallery__title">My Goats:</h2>
    <div className="gallery__grid">
      {props.items.length > 0 ? props.items.map((item,index)=>{
        <div className="gallery-item" key={index}>
          <GalleryItem item={item}></GalleryItem>
        </div>
      }):<p className="gallery__loading">Loading goats . . . </p>}
   </div> 
    </>
  )
}

export default Gallery;