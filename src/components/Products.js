import React from 'react';

function Product(props) {
  const { product, addToCart } = props;

return (
    <>
      <div id="pro">
        <img className="small" src={product.src} alt={product.name} id="img" />
        <h3>{product.name}</h3>
        <div>
        <p>{product.qty}</p>
        <h4>Rs.{product.price}</h4></div>
        <div>
          <button onClick={() => addToCart(product)

          }  className="addpro">Add To Cart</button>
        </div>
      </div>
    </>
  );
}
export default Product;