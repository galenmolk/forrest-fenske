import buttonBanner from './assets/img/button-banner.webp'

export default function PageCard({title, img, width, url}) {
    return (
        <a href={url} target='_blank'>
        <div className='page-card'>
            <img src={buttonBanner} alt='Button Background Banner'/>
            <p>{title}</p>
            <div className='page-card-thumbnail-mask'>
                <img className='page-card-thumbnail' 
                     src={img} 
                     alt={`${title} thumbnail`}
                     style={{ width: width ?? '100%' }}/>
            </div>
        </div>
        </a>
    );
}
