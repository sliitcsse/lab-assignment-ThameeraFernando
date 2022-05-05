import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

const Inventory = () => {
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

  return (
    <div>
      <h2>Inventory</h2>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, itemName, qty } = item;
            return (
              <tr key={id}>
                <td style={{ padding: "10px 0" }}>{itemName}</td>
                <td style={{ padding: "10px 0" }}>{qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
