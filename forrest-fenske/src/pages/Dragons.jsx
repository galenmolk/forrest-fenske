import Gallery from "../gallery/Gallery.jsx";
import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import {homePage, sculpturesPage} from "./Directory.js";

export default function Dragons() {
  return (
      <>
          <Header/>
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>Dragons</p>
          <Gallery/>
      </>
  )
};
