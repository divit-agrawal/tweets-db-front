import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Topics from "./Pages/Topics";
import Footer from "./Components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="top-padding"></div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/*" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
