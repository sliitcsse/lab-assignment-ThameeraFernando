import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h2>Welcome</h2>
      <h3>Please create a profile to continue.</h3>
      <h3>If you want to trade stuff, Create a Trader Profile.</h3>
      <h3>If you want to buy stuff, Create a Customer Profile.</h3>
      <Link to="/create-profile">Create Profile</Link>
    </div>
  );
};

export default Index;
