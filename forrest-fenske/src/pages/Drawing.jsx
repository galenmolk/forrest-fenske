import Header from "../Header";
import NavBar from "../NavBar";
import Gallery from "../gallery/Gallery.jsx";
import {homePage} from "./Directory.js";
import Footer from "../Footer.jsx";
import PageDescription from "../PageDescription/PageDescription.jsx";
import {dummy} from "../Dummy.js";
import {useEffect, useState} from "react";
import {getImages} from "../cloudinary/Cloudinary.js";

const Drawing = () => {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        getImages("https://res.cloudinary.com/cloudkeeper/image/list/drawing.json",
            setDrawings)
    }, []);
    
 return (
    <>
        <Header/>
        <NavBar pages={[
            homePage
        ]}/>
        <p className='title'>Drawing</p>
        <Gallery images={drawings}/>
        <Footer spaceClass={'gallery-space'} footerClass={'gallery-footer'}/>

    </>
 )
};

export default Drawing;
