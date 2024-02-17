import { Link } from "react-router-dom"

export default function NavBar({pages}) {
    return (
        <>
        <nav>
            <div>
                {pages !== undefined ? pages.map((o, idx) => {
                    return <div>
                        <Link to={o.path} key={idx}>{o.name}</Link>
                    </div>
                }) : <></>}
            </div>
        </nav>
        </>
    )
}
