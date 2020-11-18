import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth'
import { Link } from "react-router-dom";


const Navbar = ( {loggedIn} ) => {


  return (
    <>
        <p>Navbar component placeholder {loggedIn ? "logged in " : "not logged in"}</p>
        <a href='/my-account'>My Account</a>        

    </>
  );
};

export default Navbar;