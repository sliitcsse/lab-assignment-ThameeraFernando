import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";

const Customers = () => {
  const [items, setItems] = useState([]);
  const getAllItems = async () => {
    try {
      const response = await axios.get("/getUsers");
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
      <h2>Customer List</h2>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Email</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, name, type, email, phone } = item;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{type}</td>
                <td>{email}</td>
                <td>{phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
