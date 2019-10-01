import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

//? Components
import ConsumerLogin from './components/auth/login'
import FarmerRegister from './components/auth/farmer_register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConsumerLogin/>     
        <FarmerRegister/>  
      </header>
    </div>
  );
}

export default App;
