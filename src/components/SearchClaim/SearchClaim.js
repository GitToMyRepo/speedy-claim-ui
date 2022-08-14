import { getTestData, getAllClaimsAxiosVersion } from "../../data/DataFunctions";
//import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from "react";
import ClaimRow from "./ClaimRow";

const SearchClaim = (props) => {
    const [claims, setClaims] = useState([]);

    // const dispatch = useDispatch();
    // const claimsInRedux = useSelector(state => state.claims);
    // const lastFetchInRedux = useSelector(state => state.lastFetch);

    const getDataFromServer = () => {
        // let timeDifference = 999999;
        // if (claimsInRedux.length > 0) {
        //     const now = new Date();
        //     console.log("lastFetchInRedux="+lastFetchInRedux);
        //     timeDifference = now.getTime() - lastFetchInRedux.getTime();
        // }
        // console.log("time difference: " + timeDifference);

        // if (claimsInRedux.length > 0 && timeDifference < 60000) {
        //     setClaims(claimsInRedux);
        //     console.log("got the claims from redux");
        // }
        const claimsPromise = getAllClaimsAxiosVersion();
        //getTestData();
        console.log("getting the claims from redux");
        claimsPromise.then (
            (response) => {
                console.log(response)
                if(response.status === 200) {
                    setClaims(response.data);     
                    //dispatch({type : "save-claims", value : response.data});              
                }
                else {
                    console.log("Something went wrong", response.status);
                }
            }
        )
        .catch (
            (error) => {
                console.log("Server error", error);
            }
        );
    };

    useEffect( () => {
        getDataFromServer();
    } , [] );

    const displayClaims = claims
        .map ( claims => 
        <ClaimRow key={claims.policyNumber} policyNumber={claims.policyNumber} insuranceType ={claims.insuranceType} country={claims.country} 
            customerName={claims.customerName} startedDate={claims.startedDate} amount={claims.amount} reason={claims.reason} description={claims.description} />
      );

    return <Fragment>
                <table id="claimsTable" style= {{background: "#ccc"}} className="claimsTable">
            <thead>
            <tr><th>Policy Number</th><th>Insurance Type</th><th>Customer Name</th><th>Started Date</th><th>Amount</th><th>Reason</th><th>Description</th></tr>
            </thead>
            <tbody>
            {displayClaims}
            </tbody>
        </table>

        {claims.length === 0 && <p>Please wait... loading data</p>}
    </Fragment>
}

export default SearchClaim;