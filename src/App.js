import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

//? Components
import Login from "./components/auth/login";
import FormikRegister from "./components/auth/register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path = '/shop/login' component = { Login } />
          <Route exact path = '/shop/register' component = {FormikRegister}/>
          <Route exact path = '/farmer/login' component = { Login } />
          <Route exact path = '/farmer/register' component = {FormikRegister}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
