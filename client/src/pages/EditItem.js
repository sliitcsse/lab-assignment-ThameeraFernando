import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditItem = () => {
  const navigator = useNavigate();
  const { id, itemName, qty, price, promo } = useParams();
  //   console.log(id, itemName, qty, price);
  //   const [Id, setId] = useState(id);
  const [ItemName, setItemName] = useState(itemName);
  const [Qty, setQty] = useState(qty);
  const [Price, setPrice] = useState(price);
  const [Promo, setPromo] = useState(promo);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(ItemName, Qty, Price);
      const response = await axios.put("/update", {
        id: id,
        itemName: ItemName,
        qty: Qty,
        price: Price,
        promo: Promo,
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
    <div>
      <div>
        <h3>Edit Item.</h3>
        <form>
          <div>
            <label htmlFor="itemName">Item Name:</label>
            <input
              type="text"
              name="itemName"
              value={ItemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <label htmlFor="Qty">Qty:</label>
            <input
              type="text"
              name="Qty"
              value={Qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <label htmlFor="Price">Price:</label>
            <input
              type="text"
              name="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button type="submit" onClick={clearChange}>
            Clear all
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
