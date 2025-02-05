import React from 'react'
import './Youtuberabout.css'

const Youtuberabout = ({data}) => {
  return (
    <div className='about-info'>
    <h3 className='about-info-heading'>About:</h3>
    <div className='about-info-1'>

        <div>
            <p>Creation At:</p>
            <h4>{data.creationat}</h4>
        </div>
        <div>
            <p>Language:</p>
            <h4>{data.language}</h4>

        </div>
        <div>
            <p>Country:</p>
            <h4>{data.country}</h4>

        </div>
        
       
        
      </div>

      <div className='about-info-2'>
        <div>
            
            <p>{data.about}</p>

        </div>

        

      </div>
    
    </div>

    
  )
}

export default Youtuberabout