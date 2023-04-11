import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/components/NavBar";
import Footer from "./pages/components/Footer";
import ArrestDash from "./pages/ArrestDash";
import About from "./pages/About";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter basename="/SOCO_Transparency_Dashboard">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <ArrestDash />
        </Route>
        <Route>
          <NoPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
