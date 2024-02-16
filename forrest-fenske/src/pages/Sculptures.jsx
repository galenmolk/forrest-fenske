import NavBar from "../NavBar";
import Header from "../Header";
import Gallery from "../Gallery";

const Sculptures = () => {
    const images = [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
          original: "https://picsum.photos/id/1015/1000/600/",
          thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
          original: "https://picsum.photos/id/1019/1000/600/",
          thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

    return (
        <>
            <Header/>
            <NavBar/>
            <h1>Sculptures</h1>
            <Gallery images={images}/>
        </>
    )
}

export default Sculptures;
