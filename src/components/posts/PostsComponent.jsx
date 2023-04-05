import React from 'react';
import './postsComponent.css';
import { PostsList } from '../../utils/PostsConstants';
import PostItem from './postItem/PostItem';

const Posts = () => {
  return (
    <div className="posts-componentWrapper">
     <div className='featured-posts'> 
     <h1>Featured Posts</h1>
      {PostsList.map((post) => (
       post.featured === true ?  <PostItem
       title={post.title}
       summary={post.summary}
       thumbnail={post.thumbnail}
       createdAt={post.createdAt}
       author={post.author}
       id={post.id}
     /> : ''
      ))} 
      </div>
      <div className='all-posts'>
        <h1>Our Latest News</h1>
        {PostsList.map(post => (
          <PostItem
          id={post.id}
          title={post.title}
          summary={post.summary}
          thumbnail={post.thumbnail}
          createdAt={post.createdAt}
          author={post.author}
        />
        ))}
      </div>
    </div>
  );
};

export default Posts;
