import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./pages/components/NavBar";
import Footer from "./pages/components/Footer";
import Spinner from "./pages/components/Spinner";

const ArrestDash = lazy(() => import("./pages/ArrestDash"));
const About = lazy(() => import("./pages/About"));
const NoPage = lazy(() => import("./pages/NoPage"));

function App() {
  return (
    <BrowserRouter basename="/SOCO_Transparency_Dashboard">
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
