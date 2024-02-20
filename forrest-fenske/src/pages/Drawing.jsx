import Header from "../Header";
import NavBar from "../NavBar";
import Gallery from "../gallery/Gallery.jsx";
import {homePage} from "./Directory.js";
import Footer from "../Footer.jsx";
import PageDescription from "../PageDescription/PageDescription.jsx";
import {dummy} from "../Dummy.js";

const Drawing = () => {
 return (
    <>
        <Header/>
        <NavBar pages={[
            homePage
        ]}/>
        <p className='title'>Drawing</p>
        <PageDescription text={dummy}/>
        <Gallery/>
        <Footer spaceClass={'gallery-space'} footerClass={'gallery-footer'}/>

    </>
 )
};

export default Drawing;
