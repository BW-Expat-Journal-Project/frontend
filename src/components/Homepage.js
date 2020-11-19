import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import PostMaker from './PostMaker'

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('posts')
      .then((res) => {
        setAllPosts(res.data.postsdata)
      })
      .catch((err) => console.log(`There is an error fetching.`))
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        !allPosts.length 
          ? <p>No posts found. Please check back later.</p>
          : (
            <div className="row mx-center">
              {allPosts.map(post => (
                <PostMaker
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          )
      )}
    </>
  );
};

export default Homepage;