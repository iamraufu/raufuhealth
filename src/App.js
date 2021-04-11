import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            
          </Route>
          <Route path="/services">
           
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
