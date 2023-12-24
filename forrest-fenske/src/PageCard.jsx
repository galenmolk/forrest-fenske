import buttonBanner from './assets/img/button-banner.webp'

export default function PageCard({title, img, width, url, margin, top, left}) {
    return (
        <a href={url} target='_blank'>
            <div className='page-card'>
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
                <p>{title}</p>
            </div>
        </a>
    );
}
