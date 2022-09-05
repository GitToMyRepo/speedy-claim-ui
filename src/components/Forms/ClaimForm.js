import { useState } from "react";

const ClaimForm = (props) => {
    const [claim, setClaim] = useState([]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setClaim({
          [name]: value
        });
      }

    const handleSubmit = (e) => {
        console.log("handleSubmit " + e);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Policy Number:
                <input type="text" value={props.policyNumber} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Insurance Type:
                <select>
                    <option value="MOTOR">Motor</option>
                    <option value="PET">Pet</option>
                    <option value="PROPERTY">Property</option>
                </select>
            </label>
            <br />
            <label>
                Customer Name:
                <input type="text" value={props.customerName} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Date Started:
                <input type="date" value={props.startedDate} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Amount:
                <input type="text" value={props.amount} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Reason:
                <input type="text" value={props.reason} onChange={handleInputChange} />
            </label>
            <br />
            <label>
              Description:
              <textarea value={props.description} onChange={handleInputChange} />
            </label>
            <br/>
            <input type="submit" value="Submit" />
        </form>

    )
}

export default ClaimForm;