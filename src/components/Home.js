import React, { useState } from 'react';
import Navbar from './Navbar';
import Product from './Products';
import data from '../api'


function Home(props) {
    const { addToCart,count} = props;
    const [search, setSearch] = useState("");
    

    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(value);
        setSearch(value);
    }

    return(
         <div className="home-container">
            
            <Navbar count={count}/>
            
            <div className="child4">
                <input className="search" type="text" placeholder="&#61442;" value={search}
                    onChange={handleSearch}/>
            </div>

            <div className="App">
                {data.map((product) => {
                    if (search.length !== 0) {
                        if (product.name.toLowerCase().startsWith(search.toLocaleLowerCase()))
                            return <div id="pro">
                                      <img className="small" src={product.src} alt={product.name} id="img" />
                                      <h3>{product.name}</h3>
                                      <p>{product.qty}</p>
                                      <h3>Rs.{product.price}</h3>
                                     <div>
                                       <button className="addpro" onClick={() => addToCart(product)} 
                                        >Add To Cart</button>
                                     </div>
                                   </div>
                    }
                    else {
                        return <Product key={product.id} product={product} addToCart={addToCart}></Product>;
                    }
                }
                )}
            </div>
                
         </div>
    );
}

export default Home;