import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartPage from "./components/cartPage";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter basename= "/home">
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/order" element={<ProductCard />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
