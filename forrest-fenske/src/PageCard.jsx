import buttonBanner from './assets/img/button-banner.webp'
import { Link } from 'react-router-dom'

export default function PageCard({title, className, target, img, width, url, margin, top, left}) {
    return (
        <Link to={url} target={target || null}>
            <div className={className}>
                <div className='page-card-thumbnail-mask'>
                    <img className='page-card-thumbnail'
                         src={img}
                         alt={`${title} thumbnail`}
                         style={{width: width ?? '100%', 
                             margin: margin || '0',
                             top: top || '0%',
                             left: left || '0%'
                         }}/>
                </div>
                <img className='page-banner' src={buttonBanner} alt='Button Background Banner'/>
                <p className="page-card-text">{title}</p>
            </div>
        </Link>
    );
}
