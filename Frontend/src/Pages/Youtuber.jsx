import React from 'react'
import {useLocation} from 'react-router-dom'
import Youtubercard from '../Components/Youtubercard/Youtubercard'
import Navbar from '../Components/Navbar/Navbar'
import './Youtuber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Youtuber = () => {

    const location = useLocation();
    const youtuberdata = location.state?.result || [];
  return (
    <div>
        
        <div className='youtuber-header'>
          <div className='youtuber-header-channels'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <p>{youtuberdata.length} Channels</p>
          </div>

          <div className='youtuber-header-search'>
          <FontAwesomeIcon icon={faPenToSquare}/>
          <a href="/">Edit Search</a>
          </div>

        </div>
        <div className='youtuber-content'>
            {youtuberdata.length > 0 ? (
            youtuberdata.map((data) => {
                console.log(data);
                return <Youtubercard  key={data._id} data={data} />

            })
            ) : (
            <p>No results found.</p>)}

        </div>
        

    </div>
  )
}

export default Youtuber