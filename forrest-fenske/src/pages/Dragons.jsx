import Gallery from "../gallery/Gallery.jsx";
import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import {homePage, sculpturesPage} from "./Directory.js";
import Footer from "../Footer.jsx";

export default function Dragons() {
  return (
      <>
          <Header showBorder={true}/>
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>Dragons</p>
          <Gallery/>
          <Footer/>

      </>
  )
};
