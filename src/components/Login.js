import React, { useState } from "react";

import axiosWithAuth from '../utils/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

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

  const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
          .post('/auth/login', login)
          .then(res => {
            //   console.log(res.data.user.id);
              sessionStorage.setItem('expatJournalToken', res.data.payload);
              sessionStorage.setItem('currentUser', res.data.user.id);

              props.history.push('/homepage');
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
