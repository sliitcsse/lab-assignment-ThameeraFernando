import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CusNavBar from "../components/CusNavBar";

const Wishlist = () => {
  const navigator = useNavigate();
  const [items, setItems] = useState([]);
  const getAllItems = async () => {
    try {
      const response = await axios.get("/getWishList");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const clearList = async () => {
    console.log("Remove items");
    const response = await axios.delete("/wishlistClear");
    navigator("/customer-page");
    setItems(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <CusNavBar />
      <h3>Whish List</h3>
      <ul>
        {items.map((item) => {
          const { wId, itemName, price } = item;
          return (
            <div key={wId} style={{ padding: "10px" }}>
              <li>
                <h3>{itemName}</h3>
              </li>
            </div>
          );
        })}
      </ul>
      <button type="button" onClick={clearList}>
        Clear List
      </button>
    </div>
  );
};

export default Wishlist;
