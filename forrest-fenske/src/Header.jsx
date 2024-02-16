import header from './assets/img/header.webp'
import border from './assets/img/border.webp'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <div>
            <Link to='/forrest-fenske/'>
                <img src={header} alt='Womb Tomb – Recycled Art & Tool' className='header'/>
            </Link>
            <img src={border} alt='Website border' className='border'/>
        </div>
        </>
    )
};

export default Header;
