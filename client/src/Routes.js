import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginView from "./components/user/LoginView";
import HomeView from "./components/user/HomeView";
import RegisterView from './components/user/RegisterView';

class Routes extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/home" component={HomeView} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
