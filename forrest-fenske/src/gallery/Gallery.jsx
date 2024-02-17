import './gallery.css'

const Gallery = ({images}) => {
    return (
        <>
            <img className='main-display' src={images[0].original}></img>
        </>
    )
};

export default Gallery;
