import React from "react";
export default function Login(props) {
    //passed from App
  const { values, update, submit } = props;

  //Use update from App
  const onChnage = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  //use Submit from App
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
            minLength='5'
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
            minLength='6'
          ></input>
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}
