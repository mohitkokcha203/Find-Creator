import React from 'react'
import './Youtubercontent.css'

const Youtubercontent = ({data}) => {
const token = localStorage.getItem("token");
  return (
    <div className='content-info'>
            <h3 className='content-info-heading'>Content Overview:</h3>
            {(token)?
            <>
            <div className='content-info-1'>

            <div>
                <p>Tag Name:</p>
                <h4>{data.tagname}</h4>
            </div>
            <div>
                <p>Shorts:</p>
                <h4>{data.shorts}</h4>

            </div>

            <div>
                <p>Membership:</p>
                <h4>{data.membership}</h4>

            </div>

            <div>
                <p>Made for Kids:</p>
                <h4>{data.madeforkid}</h4>

            </div>
           
            
          </div>

          <div className='content-info-2'>

            <div>
                <p>Bio Name:</p>
                <h4>#{data.bioname}</h4>

            </div>
            <div>
                <p>Latest Video:</p>
                <h4>{data.latestvideodetail}</h4>

            </div>

          </div>
          </>
            :<>
            <div className='content-info-1 bluredcontent'>

            <div>
                <p>Tag Name:</p>
                <h4>{data.tagname}</h4>
            </div>
            <div>
                <p>Shorts:</p>
                <h4>{data.shorts}</h4>

            </div>

            <div>
                <p>Membership:</p>
                <h4>{data.membership}</h4>

            </div>

            <div>
                <p>Made for Kids:</p>
                <h4>{data.madeforkid}</h4>

            </div>
           
            
          </div>

          <div className='content-info-2 bluredcontent'>

            <div>
                <p>Bio Name:</p>
                <h4>#{data.bioname}</h4>

            </div>
            <div>
                <p>Latest Video:</p>
                <h4>{data.latestvideodetail}</h4>

            </div>

          </div></>}
            
            
            
            
            

            
            
            
            

          </div>
    
  )
}

export default Youtubercontent