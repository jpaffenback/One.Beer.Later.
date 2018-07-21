import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';
import Home from "../Home";
import AfterWork from "../AfterWork";
import CompiledLogins from "../CompiledLogins";
import SignUp from "../SignUp";
import BarsLayout from "../BarsLayout";
class AppRouter extends Component {
  render() {
    return (
      <div className="router">
   
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/afterwork" component={AfterWork} />
                <Route exact path="/login" component={CompiledLogins} />                
                <Route exact path="/signup" component={SignUp} />
              </Switch>
          </Router>
     
      </div>
    );
  }
}

export default AppRouter;