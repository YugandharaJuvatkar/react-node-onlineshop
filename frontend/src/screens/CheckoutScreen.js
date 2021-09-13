import React from "react";
import { Link } from "react-router-dom";

function CheckoutScreen(props) {
  return (
    <div className="product" aria-live="polite">
      <div>
        <h3>Dear Customer</h3>
        <p>
          Your order has been placed successfully.Thank You! for shopping with
          us .
        </p>
      </div>
      <div>
        <Link to="/"> Happy Shopping!! </Link>
      </div>
    </div>
  );
}

export default CheckoutScreen;
