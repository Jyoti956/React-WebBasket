import React, { useState, useEffect } from 'react';
import './App.css';
import data from './api'
import Home from './components/Home';
import UserCart from './components/UserCart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Buynow from './components/Buynow';
import Shipping from './components/Shipping';
import Order from './components/Order';
import Logout from './components/Logout';


function App() {
  const { products} = data;
  const [cartItems, setCartItems] = useState([]);
  const [count,setCount]=useState(0);
  console.log(products);
  
useEffect(() => {
    const oldItems = JSON.parse(localStorage.getItem('cartItems'));
    if (oldItems) {
      setCartItems(oldItems)
      setCount(oldItems.length)
    }
  }, []);

useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])
  
  
const addToCart = (product) => {
    const itemHai = cartItems.find((item) => item.id === product.id);
    if (itemHai) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...itemHai, qty: itemHai.qty + 1 } :item));
    }
    else {
      setCount(count+1);
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  
  const removeFromCart = (product) => {
    const itemHai = cartItems.find((item) => item.id === product.id);
    if (itemHai.qty === 1) {
      setCount(count-1)
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...itemHai, qty: itemHai.qty - 1 } : item));
    }
  };

  const removeItem = (product) => {
    const itemHai = cartItems.find((item) => item.id === product.id);
    if (itemHai.id === product.id) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      if(count>=1){
        setCount(count-1)
      }
    }
  };

  return (
    <Router>
      <Switch>
      
        <Route exact path="/">
          <Home products={products} addToCart={addToCart} count={count}/>
        </Route>

        <Route exact path="/usercart">
          <UserCart cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart} removeItem={removeItem} />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/buynow">
          <Buynow cartItems={cartItems} 
          addToCart={addToCart} removeFromCart={removeFromCart} removeItem={removeItem}/>
        </Route>

        <Route exact path="/shipping">
          <Shipping cartItems={cartItems} setCount={setCount}/>
        </Route>

        <Route exact path="/order">
          <Order count={count}/>
        </Route>

        <Route exact path="/logout">
          <Logout count={count}/>
        </Route>

      </Switch>
    </Router>
  );
}
export default App;
