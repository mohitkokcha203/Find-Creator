import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './BasicSearch.css';
import { handleError, handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';

import ContentSearch from '../ContentSearch/ContentSearch';


const BasicSearch = () => {

  const navigate = useNavigate();
  
  const categories = ['Search','Entertainment', 'Education', 'Technology', 'Music','Programming','Sports','Travel'];
  const languages = ['Search','English', 'Hindi'];
  const countries = ['Search', 'India','United States'];
  const subscribers = ['MIN',500,1000,5000,10000,20000,50000,100000,200000,500000];
  const subscribersMax = ['MAX',10000,20000,50000,100000,200000,500000,1000000,2000000,5000000];
  const viewsMin = ['MIN',200,500,1000,5000,10000,15000,20000,30000,50000,100000];
  const viewsMax = ['MAX',5000,10000,15000,20000,25000,30000,50000,100000,150000,200000];
  const TotalVideoMin = ['MIN',200,300,500,1000,2000,5000,10000,15000,20000];
  const TotalVideoMax = ['MAX',2000,5000,10000,15000,20000,50000,100000,150000,200000];
  const latestVideoMin = ['MIN',1,2,5,8,10,13,15,20,30];
  const latestVideoMax = ['MAX',5,10,15,20,25,30,35,40,50];
  const [youtuberdata,setYoutuberdata] =useState()
  const [formData, setFormData] = useState({
    channelname: '',
    category: '',
    language: '',
    country: '',
    subscribersMin: '',
    subscribersMax: '',
    viewsMin: '',
    viewsMax: '',
    totalVideoMin: '',
    totalVideoMax: '',
    latestVideoMin: '',
    latestVideoMax: '',
    bioname: '',
    tagname: '',
    madeForKids:'',
    hasShorts:'',
    hasMembership:'',
    averageVideoMin: '',
    averageVideoMax : '',
    averageViewMin: '',
    averageViewMax: '',
    averageLikeMin: '',
    averageLikeMax: '',
    averageCommentMin: '',
    averageCommentMax: '',
    averageVideoLengthMin: '',
    averageVideoLengthMax: '',
  });

  const handleChange = (e) => {
    setFormData({
  
      
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };


  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {channelname,
            category,
            language,
            country,
            subscribersMin,
            subscribersMax,
            viewsMin,
            viewsMax,
            totalVideoMin,
            totalVideoMax,
            latestVideoMin,
            latestVideoMax,
            bioname,
            tagname,
            madeForKids,
            hasShorts,
            hasMembership,
            averageVideoMin,
            averageVideoMax,
            averageViewMin,
            averageViewMax,
            averageLikeMin,
            averageLikeMax,
            averageCommentMin,
            averageCommentMax,
            averageVideoLengthMin,
            averageVideoLengthMax

        } = formData;

      if(!category){
        return handleError("Category is Required");
      }

      try {
        const URL = "http://localhost:8080/searchyoutuber"
        const response = await fetch(URL,{
          method:"POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(formData)

          
        });
        const youtuberdetail = await response.json();
        const { success, message, result } = youtuberdetail;
       
        console.log(result);
        navigate("/youtuber",{ state: { result } });

        


      } catch (error) {
        return handleError(error)
      }
  }

  return (
    <>
    <form action="" onSubmit={handleSubmit}>
    <div className='basic-form'>
      <h1>Basic Filters</h1>

      <div className='basic-search-form' >

        <div className='basic-left-form'>
          <div className='basic-form-1'>
            <label>Channel Name:</label>
            <input type="text" placeholder="Search for Title" name='channelname' value={formData.channelname} onChange={handleChange} />
          </div>

          <div className='basic-form-1'>
            <label>Category:</label>
            <select name='category' value={formData.category} onChange={handleChange}>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className='basic-form-1'>
            <label>Language:</label>
            <select name='language' value={formData.language} onChange={handleChange}>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>

          <div className='basic-form-1'>
            <label>Countries:</label>
            <select name='country' value={formData.country} onChange={handleChange}>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='basic-left-form'>
          <div className='basic-form-2'>
            <label>Subscribers(K):</label>
            <select name='subscribersMin' value={formData.subscribersMin} onChange={handleChange}>
              {subscribers.map((subscriber) => (
                <option key={subscriber} value={subscriber}>
                  {subscriber}
                </option>
              ))}
            </select>
            <select name='subscribersMax' value={formData.subscribersMax} onChange={handleChange}>
              {subscribersMax.map((subscriber) => (
                <option key={subscriber} value={subscriber}>
                  {subscriber}
                </option>
              ))}
            </select>
          </div>

          <div className='basic-form-2'>
            <label>Total Views(M):</label>
            <select name='viewsMin' value={formData.viewsMin} onChange={handleChange}>
              {viewsMin.map((view) => (
                <option key={view} value={view}>
                  {view}
                </option>
              ))}
            </select>
            <select name='viewsMax' value={formData.viewsMax} onChange={handleChange}>
              {viewsMax.map((view) => (
                <option key={view} value={view}>
                  {view}
                </option>
              ))}
            </select>
          </div>

          <div className='basic-form-2'>
            <label>Total Videos:</label>
            <select name='totalVideoMin' value={formData.totalVideoMin} onChange={handleChange}>
              {TotalVideoMin.map((videomin) => (
                <option key={videomin} value={videomin}>
                  {videomin}
                </option>
              ))}
            </select>
            <select name='totalVideoMax' value={formData.totalVideoMax} onChange={handleChange}>
              {TotalVideoMax.map((videomax) => (
                <option key={videomax} value={videomax}>
                  {videomax}
                </option>
              ))}
            </select>
          </div>

          <div className='basic-form-2'>
            <label>Last Video(in days):</label>
            <select name='latestVideoMin' value={formData.latestVideoMin} onChange={handleChange}>
              {latestVideoMin.map((latestVideoMin) => (
                <option key={latestVideoMin} value={latestVideoMin}>
                  {latestVideoMin}
                </option>
              ))}
            </select>
            <select name='latestVideoMax' value={formData.latestVideoMax} onChange={handleChange}>
              {latestVideoMax.map((latestVideoMax) => (
                <option key={latestVideoMax} value={latestVideoMax}>
                  {latestVideoMax}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
    
    <div >
    <ContentSearch formData={formData} handleChange={handleChange} />
    </div>
      
    

    <div className='search-result'>
    <button >See Results</button>
    
    

    </div>
    <ToastContainer/>
    </form>
    
    </>
    
  );
};

export default BasicSearch;
