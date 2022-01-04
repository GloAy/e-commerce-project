import React from "react";
import Products from "./views/Products";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
import Homepage from "./views/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import SingleProduct from "./views/SingleProduct";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/:total" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
