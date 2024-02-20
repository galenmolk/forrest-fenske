import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import Gallery from "../gallery/Gallery.jsx";
import {homePage, sculpturesPage} from "./Directory.js";
import Footer from "../Footer.jsx";
import PageDescription from "../PageDescription/PageDescription.jsx";
import {dummy} from "../Dummy.js";

export default function Lanterns() {
  return (
      <>
          <Header/>
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>Lanterns</p>
          <PageDescription text={dummy}/>
          <Gallery/>
          <Footer spaceClass={'gallery-space'} footerClass={'gallery-footer'}/>

      </>
  )  
};
