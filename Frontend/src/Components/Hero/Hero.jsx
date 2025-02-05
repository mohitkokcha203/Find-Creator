import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assests'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero" >
      <div className='hero-left'>
          <div className="hero-h1">
            <h1>The Place to find  </h1>
            <h1>Youtube Channels</h1>
            <h1>and Creators</h1>

          </div>
          <div className="hero-paragraph">
            <p><span>20+ filters</span> to discover the YouTube channels as per your need</p>
            <p><span>Email addresses and social Account Details</span> to contact the  creators</p>
            <p><span>Target creators at scale</span> and discover it </p>

          </div>
          <div className="hero-sign">
            <Link to={'/signup'}><button><FontAwesomeIcon icon={faSearch} />  Sign up</button></Link>
          </div>
      </div>
      <div className='hero-right'>
        <img src='https://media-public.canva.com/wR8UE/MAFdvjwR8UE/1/s.jpg' alt="image" />
      </div>
      
    </div>
  )
}

export default Hero