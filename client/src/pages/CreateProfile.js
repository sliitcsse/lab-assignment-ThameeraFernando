import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("Customer");
  const [isLoading, setIsLoading] = useState(false);
  const handleType = (e) => {
    const { value } = e.target;
    setType(value);
  };
  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      if (email && name && type && phone) {
        const user = { email, name, type, phone };
        const response = await axios.post("/createProfile", user);
        console.log(response.data);
        if (type === "Customer") {
          setTimeout(() => {
            navigator("/customer-page");
          }, 2000);
        } else {
          setTimeout(() => {
            navigator("/trader-page");
          }, 2000);
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const clearChange = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setPhone("");
    setType("");
  };

  return (
    <div>
      <h2>Created profile.</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="phone">Type</label>
          <select name="type" value={type} onChange={handleType}>
            <option value="Customer">Customer</option>
            <option value="Trader">Trader</option>
          </select>
        </div>
        <button type="submit" disabled={isLoading} onClick={handleSubmit}>
          Create Profile
        </button>
        <button type="submit" onClick={clearChange}>
          Clear all data
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;
