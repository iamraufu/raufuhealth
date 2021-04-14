import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment";

function App() {
  return (
    <Router>
       <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment/>
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
