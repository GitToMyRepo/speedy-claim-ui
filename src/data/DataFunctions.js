import axios from "axios";

export const addNewClaim = (claim) =>  {
    return axios({ url : "http://localhost:8080/api/addclaim/", 
    method : "POST", 
    headers : { 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : claim } );
}

export const getAllClaimsAxiosVersion = () => {
    
    const claimsPromise = axios({ url :"http://localhost:8080/api/claim/",
         method: "GET", headers: { 'Accept': 'application/json' } });
        
    return claimsPromise;
}

export const getTestData= () => {
    return Promise.resolve({status:200,data: [
        {policyNumber: 101, insuranceType: "Motor", customerName: "Ada", startedDate: "2022-08-03", amount: 392, reason: "reason", description: "desc"},
        {policyNumber: 102, insuranceType: "Pet", customerName: "Bob", startedDate: "2022-02-15", amount: 278, reason: "reason", description: "desc"}
    ]})
}

export const getClaim = (claimId) => {
    return axios(
        {url : `http://localhost:8080/api/claim/${claimId}`,
        method: "GET",
        headers : {'Accept': 'application/json'}} )
}