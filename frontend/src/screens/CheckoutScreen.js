import React from "react";
import { Link } from "react-router-dom";

function CheckoutScreen(props) {
  return (
    <div className="product">
      <div>
        <h3>Dear Customer</h3>
        <p>Your order has been placed successfully.Thank You !.</p>
      </div>
      <div>
        <Link to="/"> Happy Shopping!! </Link>
      </div>
    </div>
  );
}

export default CheckoutScreen;
