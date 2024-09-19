// Navbar.jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        {token ? (
          <>
            <li><a href="/profile">Profile</a></li>
            <li><button onClick={logout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
          </>
        )}
        <li><a href="/cart">Total</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
