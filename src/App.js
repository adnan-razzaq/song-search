import React from "react";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Layout/Home";
import { ContextController } from "./ContextController";
import Lyrics from "./Components/Tracks/Lyrics";
import "./App.css";

export default function App() {
  return (
    <ContextController>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/lyrics/tracks/:id" component={Lyrics}></Route>
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContextController>
  );
}
