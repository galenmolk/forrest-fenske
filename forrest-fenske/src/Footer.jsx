import './Footer.css'
import {Link} from "react-router-dom";
import {email} from "./Email.js";

const Footer = () => {
    return (
        <div className={'footer'}>
            <div>
                <Link to={'/forrest-fenske/'}>Home</Link>
            </div>
            <div>
                <a href={`mailto:${email}`} target='_blank'>{'Contact'}</a>
            </div>
            <div>
                <Link to={'https://www.tomfenskephotography.com/'} target={'_blank'}>Tom Fenske</Link>
            </div>
        </div>
    );
};

export default Footer;