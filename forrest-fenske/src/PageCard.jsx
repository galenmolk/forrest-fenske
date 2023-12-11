import buttonBanner from './assets/img/button-banner.png'

export default function PageCard({title}) {
    return (
        <div className='page-card'>
            <img src={buttonBanner} alt='Button Background Banner'/>
            <p>{title}</p>
        </div>
    );
}
