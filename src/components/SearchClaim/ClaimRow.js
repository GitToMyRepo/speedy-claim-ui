const ClaimRow = (props) => {
    
    return <tr id={props.cliamId} ><td>{props.policyNumber}</td><td>{props.insuranceType}</td><td>{props.customerName}</td><td>{props.startedDate}</td>
    <td>{props.amount}</td><td>{props.reason}</td><td>{props.description}</td></tr>
}

export default ClaimRow;