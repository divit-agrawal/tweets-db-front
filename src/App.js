import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Topics from "./Pages/Topics";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/*" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
