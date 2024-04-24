import NavBar from "../NavBar";
import Header from "../Header";
import PageCard from "../PageCard.jsx";
import sculptureThumbnail from "../assets/img/dragon.jpg";
import lanternThumbnail from "../assets/img/lantern.jpg"
import moreThumbnail from "../assets/img/treasure.jpeg"
import {homePage } from './Directory.js'
import Footer from "../Footer.jsx";
import {dummy} from "../Dummy.js";
import PageDescription from "../PageDescription/PageDescription.jsx";

const Sculptures = () => {
    return (
        <>
            <Header showBorder={true}/>
            <NavBar pages={[
                homePage,
            ]}/>
            <p className='title'>Sculptures</p>
            <PageDescription text={dummy}/>
            <div className='pages sculpture-pages'>
                <PageCard title='Dragons' className={'page-card'} img={sculptureThumbnail} width='120%' url='/forrest-fenske/sculptures/dragons/'
                          top={'-20%'} left={'-10%'}/>
                <PageCard title='Lanterns' className={'page-card'} img={lanternThumbnail} url='/forrest-fenske/sculptures/lanterns/' width='100%'
                          top={''} left={''}/>
                <PageCard title='More' className={'page-card'} img={"https://res.cloudinary.com/cloudkeeper/image/upload/v1713920879/WormTomb/Galleries/More/IMG_20240301_204605_01_c1trhs.jpg"} url='/forrest-fenske/sculptures/more/' width='110%'
                          top={''} left={''}/>
            </div>

            <Footer spaceClass={'sculptures-space'}/>
        </>
    )
}

export default Sculptures;
