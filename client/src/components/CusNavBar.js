import React from "react";
import { Link } from "react-router-dom";
const CusNavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/customer-page">Home</Link>
          </li>
          <li>
            <Link to="/cart-page">My Cart</Link>
          </li>
          <li>
            <Link to="/wishList-page">My Wishlist</Link>
          </li>
          <li>
            <Link to="/">Sign-out</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CusNavBar;
