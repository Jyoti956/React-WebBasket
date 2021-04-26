import React from 'react'
import basket1 from '../images/basket1.jpg';
import { Link } from 'react-router-dom';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import '../App.css'

const Navbar = (props) => {
  const { count } = props;
  return (
    
      <div id="navbar">
        <div className="child1">
          <img src={basket1} alt="logo" id="logo" />
        </div>
        <div className="child2">
          <h2>WebBasket</h2>
        </div>
        <div className="child3">
          <Link to="/usercart">
            <ShoppingCartSharpIcon id="bag" /><sup>{count}</sup>
          </Link>
        </div>
      </div>
    
  );
}

export default Navbar;
