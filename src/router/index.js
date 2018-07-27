import React from 'react';
import {BrowserRouter, Route,Redirect,Switch} from 'react-router-dom';
import MyT from '../components/MyT';
import Index from '../components/Index';
const UsersPage = () => <div>Users Page</div>;
const Router = () =>(
  <BrowserRouter basename="/fwd">
    <Switch>
      <Route path="/index" exact component={Index} />
      <Route path="/users" component={UsersPage} />
      <Route path="/test" component={MyT} />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>
);
export default Router;