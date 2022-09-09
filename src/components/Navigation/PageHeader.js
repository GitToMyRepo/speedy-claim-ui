import { useDispatch, useSelector } from 'react-redux';
import Navigation from './Navigation';
import './PageHeader.css'

const CurrentUser = (props) => {

    const username = useSelector( state => state.user.name) ;

    const dispatch = useDispatch();

    const logout = () => dispatch({ type : "logout" });

    return(
        <div className="pageHeader">
        <h1>Current User</h1> 
        {/* <Navigation setSelectedPage={props.setSelectedPage} /> */}
        {username !== "" &&  <p>Current user : {username}  
        <button onClick={logout}>logout</button> </p> }
        </div>
    )

};

export default CurrentUser;