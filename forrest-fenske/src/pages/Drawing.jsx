import Header from "../Header";
import NavBar from "../NavBar";
import Gallery from "../gallery/Gallery.jsx";
import {homePage} from "./Directory.js";

const Drawing = () => {
 return (
    <>
        <Header/>
        <NavBar pages={[
            homePage
        ]}/>
        <p className='title'>Drawing</p>
        <Gallery/>
    </>
 )
};

export default Drawing;
