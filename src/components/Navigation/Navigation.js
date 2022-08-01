import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <ul className="nav">
            <li style={{ cursor: "pointer" }} ><Link to="/new">New Claim</Link></li>
            <li style={{ cursor: "pointer" }} ><Link to="/find">Search Claim</Link></li>
        </ul>
    );
}

export default Navigation;