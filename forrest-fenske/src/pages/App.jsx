import portrait from '../assets/img/forrest-dragon-portrait.webp'
import PageCard from '../PageCard.jsx'
import drawingThumbnail from '../assets/img/drawing-thumbnail.webp'
import sculptureThumbnail from '../assets/img/sculpture-thumbnail.webp'
import musicThumbnail from '../assets/img/music-thumbnail.webp'
import ocd from '../assets/img/ocd.webp'
import Header from '../Header.jsx'
import Spacer from "../Spacer.jsx";

function App() {
    const email = 'wormtombcontact@gmail.com';
    
    return (
        <>
            <Header showBorder={true}/>
            <img className='artist-img' src={portrait} alt='Forrest Fenske, Artist. Metal Dragon Sculpture.'></img>
            <div className='bio'>
                <p>From under rotten logs and oozing out of dumpsters, Forrest Fenske weaves materials and
                    inspirations from the world around him into interdisciplinary symphonies of experience.
                    Venture deeper to bear witness.</p>
                <p>For commission inquiries or any other questions, email:</p>
                <a href={`mailto:${email}`} target='_blank'>
                    <div className='link-box'>
                        <div className='glow'></div>
                        wormtombcontact@gmail.com
                    </div>
                </a>
        </div>
        <div className='pages'>
                <PageCard title='Sculpture' className={'page-card'}  img={sculptureThumbnail} width='320%' url='/forrest-fenske/sculptures/' top={'0%'} left={'-30%'}/>
                <PageCard title='Drawing' className={'page-card'}  img={drawingThumbnail} url='/forrest-fenske/drawing/' width='250%' top={'-105%'} left={'-65%'} />
                <PageCard title='Film' className={'page-card'}  target={'_blank'} img={ocd} width={'165%'} url='https://www.youtube.com/@wormtomb4168' top={'-1%'} left={'-21%'}/>
                <PageCard title='Music' className={'page-card'}  target={'_blank'} img={musicThumbnail} width={'150%'} url='https://wormtomb.bandcamp.com/' top={'-40%'} left={'-20%'}/>
        </div>
            <Spacer space={'12rem'}></Spacer>
        </>
    )
}

export default App
