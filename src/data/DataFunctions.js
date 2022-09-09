import axios from "axios";


const basicAuthHeader = (username, password) => {
    console.log(btoa(`${username}:${password}`));
    return {'Authorization' : 'Basic ' + btoa(`${username}:${password}`)}
}

export const addNewMotorClaim = (username, password, claim) =>  {
    return axios({ url : "http://localhost:8080/api/claim/motor", 
    method : "POST", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : claim } );
}

export const addNewPropertyClaim = (username, password, claim) =>  {
    return axios({ url : "http://localhost:8080/api/claim/property", 
    method : "POST", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : claim } );
}

export const addNewPetClaim = (username, password, claim) =>  {
    return axios({ url : "http://localhost:8080/api/claim/pet", 
    method : "POST", 
    headers : {...basicAuthHeader(username, password), 'Accept': 'application/json', 'Content-Type' : 'application/json' } , 
    data : claim } );
}

export const getAllClaimsAxiosVersion = (username, password) => {
    
    const claimsPromise = axios({ url :"http://localhost:8080/api/claim/",
         method: "GET", headers: {...basicAuthHeader(username, password),  'Accept': 'application/json' } });
        
    return claimsPromise;
}

export const getTestData= () => {
    return Promise.resolve({status:200,data: [
        {policyNumber: 101, insuranceType: "Motor", customerName: "Ada", startedDate: "2022-08-03", amount: 392, reason: "reason", description: "desc"},
        {policyNumber: 102, insuranceType: "Pet", customerName: "Bob", startedDate: "2022-02-15", amount: 278, reason: "reason", description: "desc"}
    ]})
}

export const getClaim = (username, password, claimId) => {
    return axios(
        {url : `http://localhost:8080/api/claim/${claimId}`,
        method: "GET",
        headers : {...basicAuthHeader(username, password), 'Accept': 'application/json'}} )
}

export const login = (username, password) => {
    return axios(
        {url : "http://localhost:8080/api/login",
        method: "POST",
        headers : { ...basicAuthHeader(username,password) , 'Accept': 'application/json', 'Content-Type' : 'application/json' },
        data : {"username" : username}
    }) ;
}