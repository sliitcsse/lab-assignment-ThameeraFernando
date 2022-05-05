import Index from "./pages/index";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProfile from "./pages/CreateProfile";
import CustomerPage from "./pages/CustomerPage";
import TraderPage from "./pages/TraderPage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import EditItem from "./pages/EditItem";
import AddItems from "./pages/AddItems";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Promo from "./pages/Promo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/create-profile" element={<CreateProfile />}></Route>
        <Route path="/customer-page" element={<CustomerPage />}></Route>
        <Route path="/trader-page" element={<TraderPage />}></Route>
        <Route path="/cart-page" element={<Cart />}></Route>
        <Route path="/wishList-page" element={<Wishlist />}></Route>
        <Route path="/add-item-page" element={<AddItems />}></Route>
        <Route path="/customers-page" element={<Customers />}></Route>
        <Route path="/inventory-page" element={<Inventory />}></Route>
        <Route path="/promo-page" element={<Promo />}></Route>
        <Route
          path="/update-item-page/:id/:itemName/:price/:qty/:promo"
          element={<EditItem />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
