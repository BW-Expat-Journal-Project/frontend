import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import PostMaker from "./PostMaker";
import { storageKeyUser } from "../config";
import PostForm from "./PostForm";


const MyAccount =  () => {
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const isEdit = !!editItem;
  const userId = sessionStorage.getItem(storageKeyUser);

  const getMyPosts = () => {
    setLoading(true);
    return axiosWithAuth()
      // .get(`users/${userId}/posts`)
      .get('posts')
      .then((res) => {
        // setMyPosts(res.data)
        setMyPosts(res.data.postsdata)
      })
      .catch((err) => console.log(`There is an error fetching.`))
      .finally(_ => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getMyPosts();
  }, []);

  const handleSetEdit = (post) => {
    setEditItem(post);
    window.scrollTo(0,0);

  };

  const handleCancelEdit = () => {
    setEditItem(null);
  }

  const handleDelete = (post) => {
    if (working) {
      return;
    }
    setWorking(true);
    axiosWithAuth()
      .delete(`posts/${post.id}`)
      .then(() => {
        if (!!editItem && (post.id === editItem.id)) {
          setEditItem(null)
        }
        return getMyPosts();
      })
      .catch((err) =>  console.log('There is an error updating.'))
      .finally(_ => {
        setWorking(false);
      });
  };

  const handleSubmit = (formItem) => {
    if (working) {
      return;
    }
    setWorking(true);
    let request = axiosWithAuth();
    if (isEdit) {
      // edit existing item
      request = request.put(`posts/${formItem.id}`, formItem);
    } else {
      // create new item
      request = request.post(`posts`, formItem);
    }

    // do request
    request = request
      .then(results => {
        if (isEdit) {
          setEditItem(null);
        }
        return getMyPosts();
      })
      .catch((err) => {
        console.log('There is an error updating.');
      })
      .finally(_ => {
        setWorking(false);
      });

    return request;
  };

  const hasPosts = !loading && !!myPosts.length;

  return (
    <>
      <div className="container">
        <h2>{isEdit ? 'Edit' : 'New'} post</h2>
        <PostForm 
          handleSubmit={handleSubmit}
          handleCancel={handleCancelEdit}
          isDisabled={working}
          item={editItem}
        />
      </div>

      <h2>My Posts</h2>
      {hasPosts && <p>Hover over a post to edit or delete.</p>}
      {loading && <p>Loading...</p>}
      {!loading && (
        !myPosts.length 
          ? <p>You have no posts yet. Create one.</p>
          : (
            <div className="row mx-center">
              {myPosts.map(post => (
                <PostMaker
                  handleEdit={handleSetEdit}
                  handleDelete={handleDelete}
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

export default MyAccount;