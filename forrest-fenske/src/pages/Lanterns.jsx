import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import Gallery from "../gallery/Gallery.jsx";
import {homePage, sculpturesPage} from "./Directory.js";

export default function Lanterns() {
  return (
      <>
          <Header/>
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>Lanterns</p>
          <Gallery/>
      </>
  )  
};
