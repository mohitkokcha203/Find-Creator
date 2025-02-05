import React from 'react'
import './Youtuberfrequency.css'

const YoutuberFrequency = ({data}) => {
    const token = localStorage.getItem("token");
  return (
    <div className='frequency-info'>
            <h3 className='frequency-info-heading'>Frequency Overview:</h3>
            {(token)?
            <>
            <div className='frequency-info-1'>

                
                <div>
                    <p>Latest Video(in days):</p>
                    <h4>{data.latestvideo}</h4>

                </div>
                <div>
                    <p>VideoLength:</p>
                    <h4>{data.averagevideolength}</h4>

                </div>
                <div>
                    <p>Videos/month:</p>
                    <h4>{data.averagevideo}</h4>
                </div>
                
               
                
              </div>

              <div className='frequency-info-2'>
              <div>
                    <p>Views/month:</p>
                    <h4>{data.averageviews}</h4>

                </div>

                <div>
                    <p>Likes/month:</p>
                    <h4>{data.averagelikes}</h4>

                </div>

                <div>
                    <p>Comments/month:</p>
                    <h4>{data.averagecomments}</h4>

                </div>

              </div>
            
          
          </>

          :<>
          <div className='frequency-info-1 bluredcontent'>

                
            <div>
                <p>Latest Video(in days):</p>
                <h4>{data.latestvideo}</h4>

            </div>
            <div>
                <p>VideoLength:</p>
                <h4>{data.averagevideolength}</h4>

            </div>
            <div>
                <p>Videos/month:</p>
                <h4>{data.averagevideo}</h4>
            </div>



            </div>

            <div className='frequency-info-2 bluredcontent'>
            <div>
                <p>Views/month:</p>
                <h4>{data.averageviews}</h4>

            </div>

            <div>
                <p>Likes/month:</p>
                <h4>{data.averagelikes}</h4>

            </div>

            <div>
                <p>Comments/month:</p>
                <h4>{data.averagecomments}</h4>

            </div>

            </div>

            
          </>}

    </div>
    
  )
}

export default YoutuberFrequency