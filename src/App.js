import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import NavBar from "./pages/components/NavBar";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <BrowserRouter basename="/SOCO_Transparency_Dashboard">
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NoPage />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
