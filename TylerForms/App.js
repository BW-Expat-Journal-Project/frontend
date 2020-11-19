import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";

//Initial Form Values
const initialLoginFormValues = {
  username: "",
  password: "",
};
const initialRegisterFormValues = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
};

function App() {
  //Form State
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );

  //Input Chnage
  const loginInputChange = (inputName, inputValue) => {
    setLoginFormValues({
      ...loginFormValues,
      [inputName]: inputValue,
    });
  };
  const registerInputChange = (inputName, inputValue) => {
    setRegisterFormValues({
      ...registerFormValues,
      [inputName]: inputValue,
    });
  };

  //Submit the form

  const submitLoginForm = () => {
    let newLogin = {
      username: loginFormValues.username.trim(),
      password: loginFormValues.password.trim(),
    };
    if (!newLogin.username || !newLogin.password) return;

    //Post here
    setLoginFormValues(initialLoginFormValues);
  };

  const submitRegisterForm = () => {
    let newRegister = {
      username: registerFormValues.username.trim(),
      password: registerFormValues.password.trim(),
      firstName: registerFormValues.firstName.trim(),
      lastName: registerFormValues.lastName.trim(),
    };
    if (
      !newRegister.username ||
      !newRegister.password ||
      !newRegister.firstName ||
      !newRegister.lastName
    )
      return;

    //Post here
    setRegisterFormValues(initialRegisterFormValues);
  };

  return (
    <div className="App">
      <Login
        values={loginFormValues}
        update={loginInputChange}
        submit={submitLoginForm}
      />

      {
        <Register
          values={registerFormValues}
          update={registerInputChange}
          submit={submitRegisterForm}
        />
      }
    </div>
  );
}

export default App;
