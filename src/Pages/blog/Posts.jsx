import React from 'react'
import SectionHeader from '../../components/SectionHeader';
import PostsComponent from '../../components/posts/PostsComponent';
import './posts.css'

const Posts = () => {
  return (
	<div className='posts-container'>
	<SectionHeader headerTitle='Our Blog'/>
	<PostsComponent/>
	</div>
  )
}

export default Posts