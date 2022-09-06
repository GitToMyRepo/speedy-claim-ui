import { Link } from "react-router-dom";
import {useNavigate} from 'react-router';

const ClaimRow = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/view/${props.id}`);
    }

    console.log("view claim");

    return <tr id={props.key} ><td>{props.policyNumber}</td><td>{props.insuranceType}</td><td>{props.claimStatus}</td><td>{props.customerName}</td><td>{props.startedDate}</td>
    <td>{props.amount}</td><td>{props.reason}</td><td>{props.description}</td></tr>
}

export default ClaimRow;