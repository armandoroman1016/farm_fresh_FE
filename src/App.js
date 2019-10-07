import React, { useState } from "react";
import { Switch, Route, useLocation, useHistory } from "react-router";
import PrivateRoute from './utils/PrivateRoute';
import "./App.css";

//? Components
import FormikLogin from "./components/auth/login";
import FormikRegister from "./components/auth/register";
import Home from './components/consumer/home'
import Dash from './components/farmer/dashboard.js'

function App() {

  let location = useLocation()
  let history = useHistory()
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/shop/login">
            <FormikLogin location = {location} history = {history}/>
          </Route>
          <Route exact path="/shop/register">
            <FormikRegister location = {location}/>
          </Route>
          <Route exact path="/farmer/login">
            <FormikLogin location = {location} history = {history}/>
          </Route>
          <Route exact path="/farmer/register">
            <FormikRegister location = {location} />
          </Route>
          <PrivateRoute path="/shop/dashboard" component = {Home}/>
          <PrivateRoute path="/farmer/dashboard" component = {Dash}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
