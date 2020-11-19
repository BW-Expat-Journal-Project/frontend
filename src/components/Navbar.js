import React from "react";

const Navbar = ({
  loggedIn,
  handleLogout,
}) => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href='/'>Expat Journal</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
          {!loggedIn
            // logged out
            ? []

            // logged in
            : [
              <li key="l-0" className="nav-item">
                <a className="nav-link" href="/my-account">My Account</a>
              </li>
            ]
          }
          </ul>
          <ul className="navbar-nav">
            {!loggedIn
              // logged out
              ? [
                <li key="r-1" className="nav-item">
                  <a className="nav-link" href="/register">Register</a>
                </li>
              ]

              // logged in
              : [
                <li key="r-1" className="nav-item">
                  <a 
                    className="nav-link" 
                    href="/" 
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >Logout</a>
                </li>
              ]
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;