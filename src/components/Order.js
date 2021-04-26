import React from 'react';
import SentimentSatisfiedTwoToneIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import {useHistory } from "react-router-dom";

function Order(props){
    const {count}=props;
    let history=useHistory();
    
const handleLogout=()=>{
    localStorage.setItem("token",JSON.stringify(false));
    return history.push('/logout')
    
}
    return (
        <div className="order">
        <Navbar count={count}/>
        <div className="back">
        <Link to="/"><button>HOME</button></Link>
        </div>
        <div id="log">
        <button onClick={handleLogout}>LOGOUT</button>
        </div>
        <h1>Congratulations!!!<SentimentSatisfiedTwoToneIcon id="smile"/>...Your Order has been placed Successfully.</h1>
        </div>
    );
}
export default Order;