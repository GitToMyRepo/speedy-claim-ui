import { getTestData, getAllClaimsAxiosVersion } from "../../data/DataFunctions";
//import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect, useState } from "react";
import ClaimRow from "./ClaimRow";
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css'

const SearchClaim = (props) => {
    const [claims, setClaims] = useState([]);

    const claimTableColumns = [{
        Header: "Policy Number",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "policyNumber",
        filterable: true
    },{
        Header: "Insurance Type",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "insuranceType",
        filterable: true
    },{
        Header: "Customer Name",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "customerName",
        filterable: true
    },{
        Header: "Started Date",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "startedDate",
        filterable: true
    },{
        Header: "Amount",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "amount",
        filterable: true
    },{
        Header: "Reason",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "reason",
        filterable: true
    },{
        Header: "Description",
        headerStyle: {backgroundColor: "#17a2b8", color: "black"},
        accessor: "description",
        filterable: true
    }]

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

    return <div>
            <ReactTable
            data = {claims}
            columns = {claimTableColumns}
            defaultPageSize = {3}
            noDataText = {"No Claim found"}
            striped
            highlight
        />
        {/* {claims.length === 0 && <p>Please wait... loading data</p>} */}
    </div>
}

export default SearchClaim;