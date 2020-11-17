import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosWithAuth from '../utils/axiosWithAuth'


const Homepage = () => {
//   const [colorList, setColorList] = useState([]);
//   // fetch your colors data from the server when the component mounts
//   // set that data to the colorList state property
//   useEffect(() => {
//     axiosWithAuth()
//       .get('http://localhost:5000/api/colors')
//       .then((res) => {
//         console.log(res.data)
//         setColorList(res.data)
//       })
//       .catch((err) => console.log(`There is an error fetching.`))
//   }, [])


  return (
    <>
        <h1>Homepage component placeholder</h1>
    </>
  );
};

export default Homepage;