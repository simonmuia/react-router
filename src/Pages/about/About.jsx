import React from 'react'
import Description from '../../components/description/Description'
import './about.css'
import SectionHeader from '../../components/SectionHeader';

const About = () => {
  return (
	<div className='about'>
    <SectionHeader headerTitle='About Us'/>
    <div className='description'>
    <Description/>
    </div>
  </div>
  )
}

export default About