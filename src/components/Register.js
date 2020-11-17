import React from "react";
export default function Register(props) {
  //passed from App
  const { values, update, submit } = props;

  //update from App
  const onChnage = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  //submit from App
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div className="container">
      <form className="form_container" onSubmit={onSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onChnage}
            placeholder="username"
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={onChnage}
            placeholder="password"
          ></input>
        </label>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={onChnage}
            placeholder="First Name"
          ></input>
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={onChnage}
            placeholder="Last Name"
          ></input>
        </label>
        <button>Register</button>
      </form>
    </div>
  );
}
