import React from 'react';
import Navbar from './Navbar'
import {Link} from 'react-router-dom';

function Logout(props){
    const {count}=props; 

    return(
        <>
        <Navbar count={count}/>
        <div className="back">
        <Link to="/"><button>HOME</button></Link>
        </div>
        <h1 id="logout">You have been Logged-Out!!!</h1>
        </>
    );

}
export default Logout;