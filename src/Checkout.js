import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout--left">
        <img
          className="checkout--adv"
          src="https://img.freepik.com/free-vector/discount-time-banner-with-gift-bags-cart-location-your-store-realistic-style-vector-illustration_548887-119.jpg?size=626&ext=jpg"
          alt="adv"
        />
        <div>
          <h3>{!user ? "Hello, User" : "Hi, Mukesh"}</h3>
          <h3 className="checkout--title">Your Shopping Details</h3>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="checkout--right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
