import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router";
import logo from "./logo.svg";
import "./App.css";

//? Components
import Login from "./components/auth/login";
import FormikRegister from "./components/auth/register";

function App() {

  let location = useLocation()

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/shop/login">
            <Login location = {location}/>
          </Route>
          <Route exact path="/shop/register">
            <FormikRegister location = {location}/>
          </Route>
          <Route exact path="/farmer/login">
            <Login location = {location}/>
          </Route>
          <Route exact path="/farmer/register">
            <FormikRegister location = {location} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
