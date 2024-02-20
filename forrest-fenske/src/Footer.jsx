import './Footer.css'
import {Link} from "react-router-dom";
import {email} from "./Email.js";
import Spacer from "./Spacer.jsx";

const Footer = ({spaceClass, footerClass}) => {
    return (
        <>
            <Spacer className={spaceClass || 'footer-space'} />
            <div className={footerClass || 'footer'}>
                <div>
                    <Link to={'/forrest-fenske/'}>Home</Link>
                </div>
                <div>
                    <a href={`mailto:${email}`} target='_blank'>{'Contact'}</a>
                </div>
                <div>
                    <Link to={'https://www.tomfenskephotography.com/'} target={'_blank'}>Tom Fenske Photography</Link>
                </div>
            </div>
        </>
        
    );
};

export default Footer;
