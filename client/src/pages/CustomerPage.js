import React, { useEffect, useState } from "react";
import axios from "axios";
import CusNavBar from "../components/CusNavBar";
import { useNavigate } from "react-router-dom";

const CustomerPage = () => {
  const navigator = useNavigate();
  const [items, setItems] = useState([]);
  const getAllItems = async () => {
    try {
      const response = await axios.get("/getData");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);
  const addToWishList = async (item) => {
    try {
      const response = await axios.post("/addToWishList", item);
      console.log(response.data);
      console.log("add to wish list");
      navigator("/wishList-page");
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = async (item) => {
    try {
      const response = await axios.post("/addToCart", item);
      console.log(response.data);
      console.log("add to cart");
      navigator("/cart-page");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Customer Home</h2>
      <CusNavBar />
      <div style={{ padding: "10px" }}></div>
      {items.map((item) => {
        const { id, itemName, price, promo } = item;
        return (
          <div key={id} style={{ padding: "10px" }}>
            <h3>Item:{itemName}</h3>
            <h3>Retail Price:{price}</h3>
            <h3>Promotions:{promo}</h3>
            <button type="button" onClick={() => addToWishList(item)}>
              Add to wish list
            </button>
            <button type="button" onClick={() => addToCart(item)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerPage;
