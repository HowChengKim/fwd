import React from 'react';
import {BrowserRouter, Route,Redirect,Switch} from 'react-router-dom';
import Index from '../pages/Index';
import Login from '../pages/Login';
import Progress from '../pages/Progress';
const Router = () =>(
  <BrowserRouter basename="/fwd">
    <Switch>
      <Route path="/index" exact component={Index} />
      <Route path="/login" component={Login} />
      <Route path="/progress" component={Progress} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
);
export default Router;