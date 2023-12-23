import './App.css'
import header from './assets/img/header.webp'
import portrait from './assets/img/forrest-dragon-portrait.webp'
import PageCard from './PageCard.jsx'
import drawingThumbnail from './assets/img/drawing-thumbnail.webp'
import sculptureThumbnail from './assets/img/sculpture-thumbnail.webp'
import musicThumbnail from './assets/img/music-thumbnail.webp'
import border from './assets/img/border.png'
import ocd from './assets/img/ocd.jpg'

function App() {
    const email = 'wormtombcontact@gmail.com';
    
    return (
        <>
            <div>
                <img src={header} alt='Womb Tomb – Recycled Art & Tool' className='header'/>
                <img src={border} alt='Website border' className='border'/>
            </div>
            <div className='about-artist'>
                <img src={portrait} alt='Forrest Fenske, Artist. Metal Dragon Sculpture.'></img>
                <div>
                    <p>From under rotten logs and oozing out of dumpsters, Forrest Fenske weaves materials and
                        inspirations from the world around him into interdisciplinary symphonies of experience.
                        Venture deeper to bear witness.</p>
                    <p>Shop links below.</p>
                    <p>For commission inquiries or any other questions, email <a href={`mailto:${email}`} target='_blank'>wormtombcontact@gmail.com</a>.</p>
                </div>
            </div>
            <div className='pages'>
                <PageCard title='Sculpture' img={sculptureThumbnail} width='300%'
                              url='https://www.instagram.com/worm_tomb/' />
                    <PageCard title='Drawing' img={drawingThumbnail} url='https://www.patreon.com/WormTomb' width='120%'/>
                    <PageCard title='Film' img={ocd} width={'179%'}
                              url='https://www.youtube.com/@wormtomb4168'/>
                    <PageCard title='Music' img={musicThumbnail} width={'179%'} url='https://wormtomb.bandcamp.com/'/>
            </div>
        </>
    )
}

export default App
