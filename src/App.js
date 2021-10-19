import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Topics from "./Pages/Topics";
import Login from "./Pages/Login";
import AddTweet from "./Pages/AddTweet";
import UpdateTweet from "./Pages/UpdateTweet";
import Footer from "./Components/Footer";
// import Modal from "./Components/Modal";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") != null) setLoggedIn(true);
  }, []);
  return (
    <Router>
      <div className="App">
        {/* <Modal /> */}
        <Navbar
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          userData={userData}
          setUserData={setUserData}
        />
        <div className="top-padding"></div>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )}
          />
          <Route
            path="/topics"
            exact
            component={() => (
              <Topics loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            )}
          />
          <Route
            path="/login"
            component={() => (
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                userData={userData}
                setUserData={setUserData}
              />
            )}
          />
          <Route path="/addTweet" component={AddTweet} />
          <Route path="/updateTweet" component={UpdateTweet} />
          <Route path="/*" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
