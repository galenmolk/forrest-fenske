import Gallery from "../gallery/Gallery.jsx";
import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import {homePage, sculpturesPage} from "./Directory.js";
import Footer from "../Footer.jsx";
import PageDescription from "../PageDescription/PageDescription.jsx";
import {dummy} from "../Dummy.js";
import {useEffect, useState} from "react";
import {getImages} from "../cloudinary/Cloudinary.js";

export default function Dragons() {
    const [dragons, setDragons] = useState([]);

    useEffect(() => {
        getImages("https://res.cloudinary.com/cloudkeeper/image/list/dragon.json",
            setDragons)
    }, []);
    
  return (
      <>
          <Header />
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>Dragons</p>
          {/*<PageDescription text={dummy}/>*/}
          <Gallery images={dragons}/>
          <Footer spaceClass={'gallery-space'} footerClass={'gallery-footer'}/>
      </>
  )
};
