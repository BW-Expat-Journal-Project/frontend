import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { storageKeyToken, storageKeyUser } from "../config";
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = ({
  setLoggedIn,
}) => {

  const [ login, setLogin ] = useState({
    username: '',
    password: ''
  });
  const [working, setWorking] = useState(false);

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  // const history = useHistory();
  
  const handleSubmit = e => {
    e.preventDefault();
    if (working) {
      return;
    }
    setWorking(true);
    axiosWithAuth()
      .post('/auth/login', login)
      .then(res => {
        sessionStorage.setItem(storageKeyToken, res.data.token);
        sessionStorage.setItem(storageKeyUser, res.data.user.id);
        setLoggedIn(true);
      })
      .catch(err => console.log(`Login.js axiosWithAuth error:`, err.response ))
      .finally(_ => {
        setWorking(false);
      })
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          disabled={working}
          type="text"
          name="username"
          label="username"
          placeholder="username"
          value={login.username}
          onChange={handleChange}
          className="input"
        />
        <input 
          disabled={working}
          type="text"
          name="password"
          label="password"
          placeholder="password"
          value={login.password}
          onChange={handleChange}
          className="input"
        />
        <button disabled={working}>Submit</button>
      </form>
    </div>
  );
};

export default Login;