import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { addNewClaim, addNewPropertyClaim } from "../../data/DataFunctions";
import ClaimForm from "../Forms/ClaimForm";
import LoginForm from "../Forms/LoginForm";

const NewPropertyClaim = () => {

    const emptyClaim = {
        policyNumber: "", insuranceType: "", startedDate: new Date().toISOString().slice(0, 10), customerName: "",
        amount: "", reason: "", description: "", address: ""
    }

    const newClaimReducer = (state, data) => {
        console.log("state = " + state);
        console.log("data = " + data);
        console.log("data field = " + data.field);
        console.log("data value = " + data.value);
        return { ...state, [data.field]: data.value }
    }

    const [newClaim, dispatch] = useReducer(newClaimReducer, emptyClaim);

    const handleChange = (event) => {
        const dataToChange = { field: event.target.id, value: event.target.value };
        dispatch(dataToChange);
    }

    const {policyNumber, insuranceType, startedDate, customerName, amount, reason, description, address} = newClaim;
    
    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false);

    const user = useSelector(state => state.user);

    const submitForm = (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage("please wait saving")
        const response = addNewPropertyClaim(user.username, user.password, newClaim);
        response.then(result => {
            if (result.status === 200) {
                setMessage("Payment added with id " + result.data.id)
            }
            else {
                setMessage("something went wrong ", result.statusText)
            }
            setSaving(false);
        })
            .catch(error => {
                setMessage("something went wrong ", error)
                setSaving(false);
            })

    }

    return (
        <form className="newClaimForm" onSubmit={submitForm} >
           <h2 data-testid="h2">New Claim</h2>
           <label htmlFor="policyNumber">Policy Number</label>
           <input type="text" id="policyNumber" onChange={handleChange} value={policyNumber} />
           <br />
           <label htmlFor="insuranceType">Insurance Type</label>
           <input type="text" id="insuranceType" onChange={handleChange} value={insuranceType} />
           <br />
           <label htmlFor="customerName">Customer Name</label>
           <input type="text" id="customerName" onChange={handleChange} value={customerName} />
           <br />
           <label htmlFor="startedDate">Date Started</label>
           <input type="date" id="startedDate" onChange={handleChange} value={startedDate} />
           <br />
           <label htmlFor="amount">Amount</label>
           <input type="text" id="amount" onChange={handleChange} value={amount} />
           <br />
           <label htmlFor="reason">Reason</label>
           <input type="text" id="reason" onChange={handleChange} value={reason} />
           <br />
           <label htmlFor="description">Description</label>
           <input type="text" id="description" onChange={handleChange} value={description} />
           <br />
           <label htmlFor="description">Address</label>
           <input type="text" id="address" onChange={handleChange} value={address} />
           <br />
           <button disabled={saving} type="submit">Submit Claim</button>
           <p>{message}</p>
       </form>
    );
}

export default NewPropertyClaim;