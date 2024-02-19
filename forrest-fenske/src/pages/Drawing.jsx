import Header from "../Header";
import NavBar from "../NavBar";
import Gallery from "../gallery/Gallery.jsx";
import {homePage} from "./Directory.js";
import Footer from "../Footer.jsx";

const Drawing = () => {
 return (
    <>
        <Header/>
        <NavBar pages={[
            homePage
        ]}/>
        <p className='title'>Drawing</p>
        <Gallery/>
        <Footer/>

    </>
 )
};

export default Drawing;
