
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./pages/components/Footer";
import ArrestDash from "./pages/ArrestDash";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import NavBar from "./pages/components/NavBar";

export default function App() {
  return (
    <BrowserRouter basename="/SOCO_Transparency_Dashboard">
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<ArrestDash />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

