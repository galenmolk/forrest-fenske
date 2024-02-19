import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar({pages}) {
    const padding = 30;
    const perLetter = 12;
    
    const width = pages.reduce((acc, cur) => 
            acc + (cur.name.length * perLetter) + padding, 0
        );
    
    console.log(width)
    return (
        <>
        <nav>
            <div className={'navbar'} style={{ width: `${width}px`}}>
                {pages.map((o, idx) => {
                    return <div key={idx}>
                        <Link to={o.path}>{o.name}</Link>
                    </div>
                })}
            </div>
        </nav>
        </>
    )
}
