import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <ul className="nav">
            <li style={{ cursor: "pointer" }} ><Link to="/newmotor">New Motor Claim</Link></li>
            <li style={{ cursor: "pointer" }} ><Link to="/newproperty">New Property Claim</Link></li>
            <li style={{ cursor: "pointer" }} ><Link to="/newpet">New Pet Claim</Link></li>
            <li style={{ cursor: "pointer" }} ><Link to="/find">Search Claim</Link></li>
        </ul>
    );
}

export default Navigation;