// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Pizza from "./Pizza";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import { UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route
            path="/login"
            element={<UserContext.Consumer>
              {({ token }) => token ? <Navigate to="/" /> : <Login />}
            </UserContext.Consumer>}
          />
          <Route
            path="/register"
            element={<UserContext.Consumer>
              {({ token }) => token ? <Navigate to="/" /> : <Register />}
            </UserContext.Consumer>}
          />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

