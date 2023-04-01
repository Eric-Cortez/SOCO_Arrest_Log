import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter basename="/SOCO_Transparency_Dashboard">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
