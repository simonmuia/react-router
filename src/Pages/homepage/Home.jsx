import React from 'react';
import Slider from '../../components/carousel/Slider';
import Description from '../../components/description/Description';
import './home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <Slider />
      <Description/>
    </div>
  );
};

export default Home;
