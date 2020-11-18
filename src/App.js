import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import PrivateRoute from './utils/PrivateRoute'
import Login from "./components/Login";
import MyAccount from './components/MyAccount'


function App() {
  
  const [loggedIn, setLoggedIn] = useState(!!sessionStorage.getItem('currentUser'))


  return (
    <div className="App">
    <Navbar loggedIn={loggedIn}/>
      <h1>App.js placeholder</h1>
      <Router>
      <div className="App">
        <Route exact path="/">
          <Login setLoggedIn={setLoggedIn}/>
        </Route>
        <PrivateRoute path='/homepage' component={Homepage} />
        <PrivateRoute path='/my-account' component={MyAccount} />

      </div>
    </Router>
    </div>
  );
}

export default App;