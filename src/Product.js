import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log("In side Cart", cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product--info">
        <img className="product--image" src={image} alt="" />
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product--price">₹{price}</p>
      </div>
      <button className="product--button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
