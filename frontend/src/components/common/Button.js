import React from "react";

function Button({ label }) {
  return (
    <div className="form-group" className="container">
      <button data-testid="button" type="submit" className="btn btn-primary">
        {label}
      </button>
    </div>
  );
}

export default Button;