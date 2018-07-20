import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import AfterWork from "./components/AfterWork";
import CompiledLogins from "./components/CompiledLogins";
import SignUp from "./components/SignUp";
import BarsLayout from "./components/BarsLayout";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mitup" component={AfterWork} />
                <Route exact path="/login" component={CompiledLogins} />                
                <Route exact path="/signup" component={SignUp} />
              </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
