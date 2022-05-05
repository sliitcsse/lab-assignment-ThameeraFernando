import Index from "./pages/index";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProfile from "./pages/CreateProfile";
import TraderPage from "./pages/TraderPage";
import AddItems from "./pages/AddItems";
import EditItem from "./pages/EditItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/create-profile" element={<CreateProfile />}></Route>
        <Route path="/trader-page" element={<TraderPage />}></Route>
        <Route
          path="/update-item-page/:id/:itemName/:price/:qty/:promo"
          element={<EditItem />}
        ></Route>
        <Route path="/add-item-page" element={<AddItems />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
