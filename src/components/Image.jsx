
const Image = ({ id, tags, previewURL }) => {
    return(
        <img 
            className="gallery-img"
            id={id} 
            src={previewURL} 
            alt={tags} 
        />
    ); 
}

export default Image;