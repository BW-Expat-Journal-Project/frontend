import React, { useEffect, useState } from "react";

const emptyItem = {
  title: '',
  description: '',
  photo_url: '',
};

export const PostForm = ({
  isDisabled,
  handleSubmit,
  handleCancel,
  item,
}) => {
  // initialize form state with passed in item or an empty item
  const [formItem, setFormItem] = useState(!!item ? item : emptyItem);
  
  const isEdit = !!item;
  useEffect(() => {
    if(!!item) {
      setFormItem({...item});
    }
  }, [item]);

  const onChange = (e) => {
    setFormItem({
      ...formItem,
      [e.target.name]: e.target.value,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formItem)
      .then(_ => {
        setFormItem(emptyItem);
      });
  };

  const onCancel = () => {
    setFormItem(emptyItem);
    handleCancel();
  };  

  return (
    <form 
      className="post-form"
      onSubmit={onSubmit}
    >
      <fieldset disabled={isDisabled}>
        <div className="form-group">
          <label htmlFor="postTitle">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="postTitle" 
            name="title"
            onChange={onChange}
            value={formItem.title}
            placeholder={!isEdit ? 'Enter a title' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postDescription">Description</label>
          <input 
            type="text" 
            className="form-control" 
            id="postDescription"
            name="description"
            value={formItem.description}
            onChange={onChange}
            placeholder={!isEdit ? 'Enter a description' : ''}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postTitle">Photo Url</label>
          <input 
            type="text" 
            className="form-control" 
            id="postPhotoUrl"
            name="photo_url"
            value={formItem.photo_url}
            onChange={onChange}
            placeholder={!isEdit ? 'Enter a url' : ''}
          />
        </div>

        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={onCancel}
        >Cancel</button>
        <button 
          type="submit" 
          className="btn btn-primary"
        >Submit</button>
      </fieldset>
    </form>
  )
}
export default PostForm;