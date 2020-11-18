import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'


const Homepage = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('posts')
      .then((res) => {
        setAllPosts(res.data.postsdata)
      })
      .catch((err) => console.log(`There is an error fetching.`))
  }, [])


  return (
    <>
        <h1>Homepage component placeholder</h1>
    </>
  );
};

export default Homepage;