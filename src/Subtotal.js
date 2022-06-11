import React from "react";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):<strong>{value}</strong>{" "}
            </p>
            <small className="subtotal--gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Buy</button>
    </div>
  );
}

export default Subtotal;
