import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import Gallery from "../gallery/Gallery.jsx";
import {homePage, sculpturesPage} from "./Directory.js";
import Footer from "../Footer.jsx";
import PageDescription from "../PageDescription/PageDescription.jsx";
import {dummy} from "../Dummy.js";
import {useEffect, useState} from "react";
import {getImages} from "../cloudinary/Cloudinary.js";

export default function More() {
    const [more, setMore] = useState([]);

    useEffect(() => {
        getImages("https://res.cloudinary.com/cloudkeeper/image/list/more.json",
            setMore)
    }, []);
    
  return (
      <>
          <Header/>
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>More</p>
          <PageDescription text={dummy}/>
          <Gallery images={more}/>
          <Footer spaceClass={'gallery-space'} footerClass={'gallery-footer'}/>
      </>
  )
};
