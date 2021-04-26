import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function Buynow(props) {
  const {cartItems, addToCart, removeFromCart,removeItem} = props;
  console.log("cartItems", cartItems);
  console.log("cartlength", cartItems.length);
  const [cartTotal, setCartTotal] = useState(0);



useEffect(() => {
    total();
  });

const total = () => {
    let totalVal = 0;
    cartItems.map((i) => {
      return(
      totalVal += i.price * i.qty
    )})
    setCartTotal(totalVal);
    console.log(totalVal, "totallllllllll");
  };

return (
  <>
    <div className="back">
        <Link to="/"><button>Back</button></Link>
        </div>
    <div id="cartdiv">
      <h2><strong>Cart-Items</strong></h2>
      <div>
        {cartItems.length === 0 && <div><h3>Oopps!!!...Your Cart is Empty</h3></div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-4">
            <img className="small" src={item.src} alt={item.name} id="cartimg" />
            <div className="col-2">{item.name}</div>
            <div className="col-2">Rs.{item.price}</div>
            </div>
            <div className="col-2">
              <button onClick={() => removeFromCart(item)} className="decre" style={{backgroundColor:"yellowgreen"}}>
                -
              </button>{item.qty}kg
              <button onClick={() => addToCart(item)} className="incre" style={{backgroundColor:"yellowgreen"}}>
                +
              </button>
            </div>
            <div className="col-2 text-right">
              {item.qty} x Rs.{item.price}
            </div>
            <div className="col-2 text-right">
            <button onClick={() => removeItem(item)} className="remove">Remove</button>
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">
                <h3><strong>Total Price:</strong></h3>
              </div>
              <div className="col-8 text-right">
                <h2><strong>Rs.{cartTotal}</strong></h2>
              </div>
            </div>
            <hr />
            
            <div className="row">
            <Link to="/shipping">
              <button id="buy"><strong>
                Buy-Now
              </strong></button></Link>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}
export default Buynow;