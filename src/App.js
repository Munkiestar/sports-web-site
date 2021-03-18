import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Games from "./components/pages/Games/Games";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/games" exact component={Games} />
      </Switch>
    </Router>
  );
}

export default App;
