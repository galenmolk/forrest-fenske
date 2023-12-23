import buttonBanner from './assets/img/button-banner.webp'

export default function PageCard({title, img, width, url, margins}) {
    return (
        <a href={url} target='_blank'>
            <div className='page-card'>
                <div className='page-card-thumbnail-mask'>
                    <img className='page-card-thumbnail'
                         src={img}
                         alt={`${title} thumbnail`}
                         style={{width: width ?? '100%', margins: margins }}/>
                </div>
                <img className='page-banner' src={buttonBanner} alt='Button Background Banner'/>
                <p>{title}</p>
            </div>
        </a>
    );
}
