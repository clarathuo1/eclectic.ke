import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductPage from "./ProductPage";
import Header from "./Header";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Layout from "./Layout";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;