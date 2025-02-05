import React from 'react'
import './YoutuberInfo.css'

const YoutuberInfo = ({data}) => {
  return (
    <div className='youtuber-detail-info'>
            <div className='youtuber-detail-info-1'>

              <h1 >{data.channelname}</h1>
              <img src={data.channelimage} alt={data.channelname} />

            </div>
            <div className='youtuber-detail-info-2'>
              <div>
                <p>Category:</p>
                <h2>{data.category}</h2>

              </div>
              <div>
              <p>Subscribers:</p>
              <h2>{data.subscriber}</h2>
                
              </div>
              <div>
              <p>Views:</p>
              <h2>{data.totalviews}</h2>
                
              </div>
              <div>
              <p>Video:</p>
              <h2>{data.totalvideos}</h2>
                
              </div>
              
            </div>
            

          </div>
  )
}

export default YoutuberInfo