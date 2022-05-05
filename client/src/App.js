import Index from "./pages/index";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProfile from "./pages/CreateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/create-profile" element={<CreateProfile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
