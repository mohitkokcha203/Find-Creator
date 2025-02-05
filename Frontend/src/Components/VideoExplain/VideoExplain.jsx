import React from 'react';
import './VideoExplain.css';
import { assets } from '../../assets/assests';

const VideoExplain = () => {
  return (
    <div className='Video-container'>
      <p>Quick & Easy</p>
      <p>Learn how it's works in 2 minutes</p>
      <video src={assets.video} controls className='video-player'></video>
    </div>
  );
}

export default VideoExplain;
