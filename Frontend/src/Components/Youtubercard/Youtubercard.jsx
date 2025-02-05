import React, { useState } from 'react';
import './Youtubercard.css';
import YoutuberDetails from "../../Pages/YoutuberDetails/YoutuberDetails"

const Youtubercard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={`youtuber-card ${showModal ? 'blur' : ''}`}>
      <div className='card-header'>
        <img src={data.channelimage} alt={data.channelname} />
        <div>
          <h1>{data.channelname}</h1>
          <p>{data.category}</p>
        </div>
      </div>
      <div className='card-content'>
        <div className='card-content-1'>
          <p>Subscriber:</p>
          <p className='card-details'>{data.subscriber} K</p>
        </div>
        <div className='card-content-2'>
          <p>Videos:</p>
          <p className='card-details'>{data.totalvideos}</p>
        </div>
        <div className='card-content-3'>
          <p>Total Views:</p>
          <p className='card-details'>{data.totalviews} M</p>
        </div>
        <div className='card-content-4'>
          <p>Last Video:</p>
          <p className='card-content-4-p'>{data.latestvideodetail}</p>
        </div>
        <div className='card-content-5'>
          <button onClick={toggleModal}>View details...</button>
        </div>
      </div>
        {showModal && <YoutuberDetails data={data} toggleModal={toggleModal} />}
    </div>
  );
};

export default Youtubercard;
