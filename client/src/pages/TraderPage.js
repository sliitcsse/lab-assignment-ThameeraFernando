import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
const TraderPage = () => {
  const navigator = useNavigate();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});
  const [showModal, setShowModal] = useState(false);
  const getAllItems = async () => {
    try {
      const response = await axios.get("/getData");
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteItem = async (item) => {
    console.log(item);
    try {
      const response = await axios.delete("/delete", { data: item });
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateItem = (item) => {
    navigator(
      `/update-item-page/${item.id}/${item.itemName}/${item.price}/${item.qty}/${item.promo}`
    );
  };
  const addPromo = (item) => {
    setItem(item);
    setShowModal(true);
    console.log(item);
  };
  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div>
      <h2>Trader Home</h2>
      <NavBar />
      <div>{showModal && <Modal item={item} />}</div>
      {items.map((item) => {
        if (typeof item === null) {
        }
        const { id, itemName, price, qty, promo } = item;
        return (
          <div key={id} style={{ padding: "10px" }}>
            <h3>Item:{itemName}</h3>
            <h4>Price:{price}</h4>
            <h4>Qty:{qty}</h4>
            <h4>Promo:{promo}</h4>
            <button type="button" onClick={() => deleteItem(item)}>
              Delete
            </button>
            <button type="button" onClick={() => updateItem(item)}>
              Update
            </button>
            <button type="button" onClick={() => addPromo(item)}>
              Add promo
            </button>
          </div>
        );
      })}
    </div>
  );
};

const Modal = ({ item }) => {
  const { id, itemName, price, qty, promo } = item;
  const [Promo, setPromo] = useState(promo);
  const handleForm = async (e) => {
    try {
      e.Prevent;
      console.log(Promo);
      const newItem = { id, itemName, price, qty, promo: Promo };
      const response = await axios.put("/update", newItem);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form>
        <div
          style={{
            border: "1px solid red",
            padding: "10px 10px",
            display: "inline-block",
          }}
        >
          <h1>Add a Promotion</h1>

          <h3>Item Name:{itemName}</h3>
          <h3>Price:{price}</h3>
          <h3>Quenty:{qty}</h3>

          <label htmlFor="promo">Promotion:</label>
          <input
            type="text"
            value={Promo}
            onChange={(e) => setPromo(e.target.value)}
          />
          <button onClick={handleForm}>Add Promo</button>
        </div>
      </form>
    </div>
  );
};

export default TraderPage;
