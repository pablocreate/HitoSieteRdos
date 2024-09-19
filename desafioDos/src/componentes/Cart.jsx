// Cart.jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Cart = () => {
  const { token } = useContext(UserContext);

  return (
    <div>
      <h1>Tu carrito</h1>
      <button disabled={!token}>Pagar</button>
    </div>
  );
};

export default Cart;
