import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = ( props ) => {

  const [ login, setLogin ] = useState({
      username: '',
      password: ''
  })

  const handleChange = e => {
      setLogin({
          ...login,
          [e.target.name]: e.target.value
      })
  }

  const history = useHistory()
  
  const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
          .post('/auth/login', login)
          .then(res => {
              sessionStorage.setItem('expatJournalToken', res.data.payload);
              sessionStorage.setItem('currentUser', res.data.user.id);
              props.setLoggedIn(true)
              history.push('/homepage');
          })
          .catch(err => console.log(`Login.js axiosWithAuth error:`, err.response ))
  }
  return (
    <div>
      <h1>Login Component placeholder</h1>
      <form onSubmit={handleSubmit}>
          <input 
              type="text"
              name="username"
              label="username"
              placeholder="username"
              value={props.username}
              onChange={handleChange}
              className="input"
          />
          <input 
              type="text"
              name="password"
              label="password"
              placeholder="password"
              value={props.password}
              onChange={handleChange}
              className="input"
          />
          <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;