import React from 'react';

const PostMaker = ({ 
  handleEdit,
  handleDelete,
  post,
}) => {
  const isEditMode = !!handleEdit && !!handleDelete;
  
  return (
    <div className={`card${ isEditMode ? ' edit-mode' : ''}`} style={{width: 500}}>
      {!!isEditMode && (
        <div className="edit-controls">
          <button
            title="Delete"
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }} 
            className="btn-delete"
          >
            <img src="/images/delete-icon.svg" alt="Delete Post" />
          </button>

          <button 
            title="Edit"
            className="btn-edit"
            onClick={(e) => {
              e.preventDefault();
              handleEdit(post);
            }} 
          >
            <img src="/images/edit-icon.svg" alt="Edit Post" />
          </button>
        </div>
      )}
      <img src={post.photo_url} className="post-image card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
      </div>
    </div>
  )
}
export default PostMaker;

