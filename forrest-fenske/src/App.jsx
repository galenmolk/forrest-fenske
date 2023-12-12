import './App.css'
import header from './assets/img/header.webp'
import portrait from './assets/img/forrest-dragon-portrait.webp'
import Spacer from "./Spacer.jsx";
import siteData from './assets/site-data.json'
import PageCard from './PageCard.jsx'
import drawingThumbnail from './assets/img/drawing-thumbnail.webp'
import sculptureThumbnail from './assets/img/sculpture-thumbnail.webp'
import filmThumbnail from './assets/img/film-thumbnail.webp'
import musicThumbnail from './assets/img/music-thumbnail.webp'

function App() {
    return (
        <>
            <img src={header} alt='Womb Tomb – Recycled Art & Tool' className='header'/>
            <div className='about-artist'>
                <span>
                    <p>{siteData.bio}</p>
                </span>
                <span>
                    <img src={portrait} alt='Forrest Fenske, Artist. Metal Dragon Sculpture.'></img>
                </span>
            </div>
            <div className='pages'>
                <PageCard title='Sculpture' img={sculptureThumbnail} width='114%' url='https://www.instagram.com/worm_tomb/'/>
                <PageCard title='Drawing' img={drawingThumbnail} url='https://www.patreon.com/WormTomb'/>
                <PageCard title='Film' img={filmThumbnail} width={'137%'} url='https://www.youtube.com/@wormtomb4168'/>
                <PageCard title='Music' img={musicThumbnail} width={'136%'} url='https://wormtomb.bandcamp.com/'/>
            </div>  
            <Spacer space={'4rem'}/>
        </>
    )
}

export default App
