import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import { PostsList } from '../../utils/PostsConstants';
import './post.css'

const Post = ({ posts, match }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const postId = parseInt(id);
    const selectedPost = PostsList.find((post) => post.id === postId);
    // if id passed on url is not found
    if (!selectedPost){
      window.location.href = '/notfound';
    }
    setPost(selectedPost);
  }, [id]);

  return (
    <div className="post-detail-wrapper">
      <Link to='/blog' className='back-btn'>Back</Link>
      {post ? (
        <>
          <SectionHeader headerTitle={post.title} />
          <div className="post-content">
              <img src={post.thumbnail} alt='post'/>
              <div className='post-description'>
                <p>{post.description}</p>
                <div className="post-footer">
                 <em><strong> <small>Published on {post.createdAt} by {post.author}</small></strong></em>
                </div>
              </div>
          </div>
        </>
      ) : (
        <p>Loading post ...</p>
      )}
    </div>
  );
};

export default Post;
