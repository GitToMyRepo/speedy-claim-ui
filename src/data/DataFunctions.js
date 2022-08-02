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