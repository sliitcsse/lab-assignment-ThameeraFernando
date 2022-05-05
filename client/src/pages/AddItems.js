import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const AddItems = () => {
  const navigator = useNavigate();
  const [ItemName, setItemName] = useState("");
  const [Qty, setQty] = useState("");
  const [Price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(ItemName, Qty, Price);
      const response = await axios.post("/add", {
        id: new Date().getTime().toString(),
        itemName: ItemName,
        qty: Qty,
        price: Price,
      });
      navigator("/trader-page");
    } catch (error) {
      console.log(error);
    }
  };
  const clearChange = (e) => {
    e.preventDefault();
    setQty("");
    setPrice("");
    setItemName("");
  };

  return (
    <>
      <div>
        <h2>Add Item.</h2>
        <NavBar />
        <form>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            name="itemName"
            value={ItemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <label htmlFor="Qty">Qty:</label>
          <input
            type="text"
            name="Qty"
            value={Qty}
            onChange={(e) => setQty(e.target.value)}
          />
          <br />
          <label htmlFor="Price">Price:</label>
          <input
            type="text"
            name="Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="submit" onClick={clearChange}>
            Clear all
          </button>
        </form>
      </div>
    </>
  );
};

export default AddItems;
