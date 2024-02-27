import Header from "../Header.jsx";
import NavBar from "../NavBar.jsx";
import Gallery from "../gallery/Gallery.jsx";
import {homePage, sculpturesPage} from "./Directory.js";
import Footer from "../Footer.jsx";
import PageDescription from "../PageDescription/PageDescription.jsx";
import {dummy} from "../Dummy.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {getImages} from "../cloudinary/Cloudinary.js";

export default function Lanterns() {
    const [lanterns, setLanterns] = useState([]);
    
    useEffect(() => {
        getImages("https://res.cloudinary.com/cloudkeeper/image/list/lantern.json", setLanterns)
        /*const fetchLanterns = async () => {
            try {
                const response = await axios.get("https://res.cloudinary.com/cloudkeeper/image/list/lantern.json")
                setLanterns(response.data.resources.map(r => {
                    const url = `https://res.cloudinary.com/cloudkeeper/image/upload/v${r.version}/${r.public_id}.jpg`;
                    return {
                        original: url,
                        thumbnail: url,
                        thumbnailClass: 'thumbnail'
                    }
                }))
            } catch (error) {
                console.error(error)
            }
        };
        
        fetchLanterns();*/
    }, []);
    
  return (
      <>
          <Header/>
          <NavBar pages={[
              homePage,
              sculpturesPage
          ]}/>
          <p className='title'>Lanterns</p>
          <PageDescription text={dummy}/>
          <Gallery images={lanterns}/>
          <Footer spaceClass={'gallery-space'} footerClass={'gallery-footer'}/>
      </>
  )  
};
