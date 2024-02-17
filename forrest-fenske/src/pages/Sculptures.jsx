import NavBar from "../NavBar";
import Header from "../Header";
import PageCard from "../PageCard.jsx";
import sculptureThumbnail from "../assets/img/sculpture-thumbnail.webp";
import drawingThumbnail from "../assets/img/drawing-thumbnail.webp";
import Spacer from "../Spacer.jsx";
import {homePage } from './Directory.js'

const Sculptures = () => {
    return (
        <>
            <Header showBorder={true}/>
            <NavBar pages={[
                homePage,
            ]}/>
            <p className='title'>Sculptures</p>
            <div className='pages'>
                <PageCard title='Dragons' className={'page-card'} img={sculptureThumbnail} width='320%' url='/forrest-fenske/sculptures/dragons/'
                          top={'0%'} left={'-30%'}/>
                <PageCard title='Lanterns' className={'page-card'} img={drawingThumbnail} url='/forrest-fenske/sculptures/lanterns/' width='250%'
                          top={'-105%'} left={'-65%'}/>
            </div>
            <Spacer space={'7rem'}></Spacer>
            <PageCard title='More' className={'page-card'} img={drawingThumbnail} url='/forrest-fenske/sculptures/more/' width='250%'
                      top={'-105%'} left={'-65%'}/>
            <Spacer space={'12rem'}></Spacer>
        </>
    )
}

export default Sculptures;
