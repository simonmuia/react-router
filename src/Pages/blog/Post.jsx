import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader';
import { PostsList } from '../../utils/PostsConstants';
import './post.css';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const postId = parseInt(id);
    const selectedPost = PostsList.find((post) => post.id === postId);
    // if id passed on url is not found
    if (!selectedPost){
    setTimeout(()=>{
      navigate(-1);
    },1000)
    navigate('/notfound')
    }
    
    setPost(selectedPost);
   
  }, [navigate, id]);

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
