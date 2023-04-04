import React from 'react'
import './sectionheader.css'


const SectionHeader = ({headerTitle}) => {
  return (
    <div className='header'> 
    <h1>
    {headerTitle}
      </h1></div>
  )
}

export default SectionHeader