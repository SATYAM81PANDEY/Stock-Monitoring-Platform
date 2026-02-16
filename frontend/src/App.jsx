import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Landing_page/home/HomePage";
import AboutPage from "./Landing_page/about/AboutPage";
import PricingPage from "./Landing_page/pricing/PricingPage";
import SupportPage from "./Landing_page/support/SupportPage";
import ProductPage from "./Landing_page/products/ProductPage";
import Signup from "./Landing_page/signup/Signup";
import MainLayout from "./Landing_page/MainLayout";
import NotFound from "./Landing_page/NotFound";
import "./App.css";
import Login from "./Landing_page/signup/Login";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
