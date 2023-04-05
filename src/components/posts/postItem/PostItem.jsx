import React from 'react'
import './postItem.css'
import { Link } from 'react-router-dom'

const PostItem = ({id,title, thumbnail, summary, createdAt, author}) => {
  return (
	<div className='post-wrapper'>
    <img src={thumbnail} alt='thumbnail'/>
   
    <div className='post-content'>
      <div className='post-title'><h2>{title}</h2></div>
       <p>{summary}..<Link to={`/blog/${id}`}>Read More</Link></p>
     
      <div className="post-footer">
      <small><em>Posted on: {createdAt} by <strong>{author}</strong></em></small>
      </div>
    </div>
  </div>
  )
}

export default PostItem