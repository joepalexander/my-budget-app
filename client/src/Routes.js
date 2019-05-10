import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginView from "./components/user/LoginView";
import HomeView from "./components/user/HomeView";

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginView} />  
          <Route path="/login" component={LoginView} />
          <Route path="/home" component={HomeView} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
