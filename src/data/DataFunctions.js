import axios from "axios";

export const addNewClaim = (claim) =>  {
    return axios({ url : "http://localhost:8080/api/addclaim/", 
    method : "POST", 
    headers : { 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : claim } );
}