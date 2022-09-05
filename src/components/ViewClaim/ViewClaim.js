import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getClaim } from "../../data/DataFunctions";

const ViewClaim= (props) => {

    const emptyClaim= { orderId: "", date : new Date().toISOString().slice(0,10) , country: "",
        amount : "", currency: "", taxCode : "", taxRate : "", type : ""}

    const [claim, setClaim] = useState(emptyClaim);
    // const user = useSelector(state => state.user);

    const params = useParams();
    useEffect( () => {
    getClaim(params.id)
        .then( response => {
            if (response.status === 200) {
                setClaim(response.data);
            }
            else {
                console.log("Something went wrong ", response.status);
            }
        } )
        .catch( error => console.log("error occurred", error)) ;
    }, [] );
    
    // const showEditButton = () => {
    //     console.log("show edit button: ");
    //     //if (allowedRoles.includes(user.role)) {
    //         return (user.role === "MANAGER" &&    
    //         <button onClick={editclaim}>Edit</button>)// </p>)
    //     // } else {
    //     //     console.log("do nothing");
    //     // }
    // }

    const navigate = useNavigate();

    const editClaim= () => {
        console.log("editing " + params.claimId);
        navigate(`/edit/${params.claimId}`);
    }

    const allowedRoles = props.roles;
    
    return (
        <Fragment>
            <h2>View Claim{claim.claimId} </h2>
            <table className="claimsTable" >
                <tbody>
                    <tr><th>Claim Id</th><td>{claim.claimId}</td></tr>
                    <tr><th>Policy Number</th><td>{claim.policyNumber}</td></tr>
                    <tr><th>Insurance Type</th><td>{claim.insuranceType}</td></tr>
                    <tr><th>Status</th><td>{claim.claimStatus}</td></tr>
                    <tr><th>Customer Name</th><td>{claim.customerName}</td></tr>
                    <tr><th>Started Date</th><td>{claim.startedDate}</td></tr>
                    <tr><th>Amount</th><td>{claim.amount}</td></tr>
                    <tr><th>Reason</th><td>{claim.reason}</td></tr>
                    <tr><th>Description</th><td>{claim.description}</td></tr>
                </tbody>
            </table>
            {/* {showEditButton()} */}
        </Fragment>
    );
}

export default ViewClaim;