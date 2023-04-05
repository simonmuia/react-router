import React from 'react'
import './notfound.css'
import {GiSpaceSuit} from 'react-icons/gi';

const NotFound = () => {
  return (
	<div className='page-wrapper'>
		<GiSpaceSuit className='icon'/>
		<h2>404</h2>
		<p><strong>Uh Oh!</strong> You Seem Lost</p>
	</div>
  )
}

export default NotFound