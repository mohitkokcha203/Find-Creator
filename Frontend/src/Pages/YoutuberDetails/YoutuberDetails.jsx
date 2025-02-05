import React from 'react'
import './YoutuberDetails.css'
import YoutuberInfo from '../../Components/YoutuberInfo/YoutuberInfo'
import Youtubercontent from '../../Components/Youtubercontent/Youtubercontent'
import YoutuberFrequency from '../../Components/Youtuberfrequency/YoutuberFrequency'
import Youtubersocial from '../../Components/Youtubersocial/Youtubersocial'
import Youtuberabout from '../../Components/Youtuberabout/Youtuberabout'

const YoutuberDetails = ({toggleModal,data}) => {

  

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>

          {/* Channel Info */}
          <YoutuberInfo  data={data}/>
          {/* Content Info */}
          
          <Youtubercontent data={data}/>
          {/* Frequecy  Info */}
          
          <YoutuberFrequency data={data}/>
          
          {/* Social Info */}
          <Youtubersocial data={data}/>
          {/* About Info */}
          <Youtuberabout data={data}/>
      </div>
    </div>
  )
}

export default YoutuberDetails