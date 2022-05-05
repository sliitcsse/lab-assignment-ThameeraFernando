import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/trader-page">Home</Link>
          </li>
          <li>
            <Link to="/customers-page">Customers</Link>
          </li>
          <li>
            <Link to="/add-item-page">Add item</Link>
          </li>
          <li>
            <Link to="/inventory-page">Inventory</Link>
          </li>
          <li>
            <Link to="/promo-page">Promo</Link>
          </li>
          <li>
            <Link to="/">Sign-out</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
