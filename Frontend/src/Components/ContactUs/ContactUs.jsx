import React, { useState } from 'react'
import './ContactUs.css'


const ContactUs = () => {
  const [formdata,setFormData] = useState({
    name:"",
    email:"",
    details:""
  });

  const handlechange= (e)=>{
      const {name,email,details} = e.target;

      setFormData({
        ...formdata,
        [name]: value
      })
  };

  const handleSubmit = (e)=>{
    console.log("Contacted Successfully")
  }


  return (

      <div className='contact' id='contact' >
      <div className='contact-content'>
        
          <h1>The World's best</h1>
          <h1>Youtubers Content &</h1>
          <h1> Creators discovery tool</h1>

          <h3>Trusted By thousands Customers!</h3>

          <h3>&copy; Mohit Kumar Kokcha</h3>

        </div>

      

      <div className='form'  onSubmit={handleSubmit} >
        <h1>Get in Touch!</h1>
          <form className='contact-form'>
              <div className='contact-username'>
                  <label >Full Name:</label>
                  <input type="text"  required placeholder='Full Name' name='name' onChange={handlechange}/>

              </div>
              
              <div className='contact-username'>
                  <label >Email:</label>
                  <input type="text"  required placeholder='Email' name='email' onChange={handlechange}/>

              </div>

              <div className='contact-textarea'>
                
                  <label >Please Share Enquiry in Detail:</label>
                  <textarea type="text"  required placeholder='' name='details' onChange={handlechange}/>
                  
              </div>
              
              <div className='contact-button'>
                  <button type="submit">Submit</button>
                  
              </div>
              
              
            </form>


          </div>
      </div>
    
  )
}

export default ContactUs