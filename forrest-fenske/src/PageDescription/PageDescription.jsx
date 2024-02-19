import './PageDescription.css'

export default function PageDescription({text}) {
    return (
        <div className={'page-description'}>
            <p>
                {text}
            </p>
        </div>
    )
}
