import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import PrivateRoute from './utils/PrivateRoute'
import Login from "./components/Login";
import MyAccount from './components/MyAccount'
import { storageKeyToken, storageKeyUser } from './config';


function App() {
  const intitialLoggedIn = (
    !!sessionStorage.getItem(storageKeyUser)
    && !!sessionStorage.getItem(storageKeyToken)
  );
  const [loggedIn, setLoggedIn] = useState(intitialLoggedIn);

  const handleLogout = () => {
    sessionStorage.removeItem(storageKeyUser);
    sessionStorage.removeItem(storageKeyToken);
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Navbar
        handleLogout={handleLogout}
        loggedIn={loggedIn}
      />
      <Router>
        <Route exact path="/">
          {!loggedIn 
            ? <Login setLoggedIn={setLoggedIn}/>
            : <Homepage />
          }
        </Route>
        <PrivateRoute path='/my-account' component={MyAccount} />
      </Router>
    </div>
  );
}

export default App;