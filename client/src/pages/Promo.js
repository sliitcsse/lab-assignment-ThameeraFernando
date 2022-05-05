import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Promo = () => {
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
      <h2>Promotions</h2>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Promo</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, itemName, promo } = item;
            return (
              <tr key={id}>
                <td>{itemName}</td>
                <td>{promo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Promo;
