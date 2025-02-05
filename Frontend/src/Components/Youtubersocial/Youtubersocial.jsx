import React from 'react'

import './Youtubersocial.css';

const Youtubersocial = ({data}) => {
  const token = localStorage.getItem("token");
  return (
    <div className='social-info'>
            <h3 className='social-info-heading'>Socials Overview:</h3>
            {(token)?
            <>
            <div className='social-info-1'>

                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Youtube" />
                    <a href={data.youtube}>Youtube</a>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram" />
                    <a href={data.instagram}>Instagram</a>

                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" />
                    <a href={data.facebook}>Facebook</a>

                </div>



                </div>

                <div className='social-info-2'>

                {data.twiter !== "No" && (
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Twiter" />
                    <a href={data.twiter}>Twiter</a>

                </div>)}

                {data.linkdin !== "No" && (
                <div>
                    
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Linkdin" />
                    <a href={data.linkdin}>Linkdin</a>

                </div>)}

                </div>

                <div className="social-info-3">
                {data.email !== "No" &&(
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email" />
                    <a href={`mailto:${data.email}`}>{data.email}</a>

                </div>)}
                </div>

            </>:
            <>
              <div className='social-info-1 bluredcontent'>

                  <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Youtube" />
                      <a href={data.youtube}>Youtube</a>
                  </div>
                  <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Instagram" />
                      <a href={data.instagram}>Instagram</a>

                  </div>
                  <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook" />
                      <a href={data.facebook}>Facebook</a>

                  </div>



                  </div>

                  <div className='social-info-2 bluredcontent'>

                  
                  <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="Twiter" />
                      <a href={data.twiter}>Twiter</a>

                  </div>

                  
                  <div>
                      
                      <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="Linkdin" />
                      <a href={data.linkdin}>Linkdin</a>

                  </div>

                  </div>

                  <div className="social-info-3 bluredcontent">
                    
                  <div>
                      <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email" />
                      <a href={`mailto:${data.email}`}>{data.email}</a>

                  </div>
                  </div>
            </>}
            
         

          </div>
  )
}

export default Youtubersocial