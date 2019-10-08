import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
      <h2 className="nav-header">FFP</h2>
      <ul className="nav-links">
        <Link className="nav-link" to = '/'>
          <li>Home</li>
        </Link>
        <Link className="nav-link" to = '/shop/dashboard' >
          <li>Shop</li>
        </Link>
        <Link className="nav-link">
          <li>Order History</li>
        </Link>
        <Link className="nav-link">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
