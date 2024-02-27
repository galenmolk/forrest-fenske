import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import "./gallery.css"

const fallbackImages = [
    {
        original: "https://picsum.photos/id/1018/1000/600.jpg",
        thumbnail: "https://picsum.photos/id/1018/250/150.jpg",
    },
    {
        original: "https://picsum.photos/id/1015/1000/600.jpg",
        thumbnail: "https://picsum.photos/id/1015/250/150.jpg",
    },
    {
        original: "https://picsum.photos/id/1019/1000/600.jpg",
        thumbnail: "https://picsum.photos/id/1019/250/150.jpg",
    },
];

const Gallery = ({images}) => {
    return (
        <div className={'gallery'}>
            <ImageGallery  items={images || fallbackImages} />
        </div>
    )
};

export default Gallery;
