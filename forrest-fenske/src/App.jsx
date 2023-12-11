import './App.css'
import header from './assets/img/header.png'
import portrait from './assets/img/forrest-dragon-portrait.png'
import Spacer from "./Spacer.jsx";
import siteData from './assets/site-data.json'
import PageCard from './PageCard.jsx'

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
                <PageCard title='Sculpture'/>
                <PageCard title='Drawing'/>
                <PageCard title='Film'/>
                <PageCard title='Music'/>
            </div>  
            <Spacer space={'2rem'}/>
        </>
    )
}

export default App
