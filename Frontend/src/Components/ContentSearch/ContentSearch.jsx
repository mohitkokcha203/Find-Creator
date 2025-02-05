import React from "react";
import { useState } from "react";
import './ContentSearch.css'

const ContentSearch = ({formData,handleChange}) => {
  
  const averageVideoMin = ['MIN',2,5,10,15,20,25,30,35,40];
  const averageVideoMax = ['MAX',20,25,30,35,40,50,60,80,100];
  const averageViewMin = ['MIN',1000,5000,10000,15000,20000,30000,50000,100000,150000];
  const averageViewMax = ['MAX',10000,15000,20000,30000,50000,100000,150000,250000,500000];
  const averageLikeMin =['MIN',1000,5000,10000,15000,20000,30000,50000,100000,150000];
  const averageLikeMax =  ['MAX',10000,15000,20000,30000,50000,100000,150000,250000,500000];
  const averageCommentMin = ['MIN',1000,5000,10000,15000,20000,30000,50000,100000,150000];
  const averageCommentMax = ['MAX',10000,15000,20000,30000,50000,100000,150000,250000,500000];
  const averageVideoLengthMin = ['MIN',2,5,7,10,15,20,30,40,50];
  const averageVideoLengthMax = ['MAX',5,10,20,30,40,50,70,100,150];
  const selectYesNo = ['Select','Yes','No'];

  const token = localStorage.getItem("token");
  console.log(token);
  
  
  return (
    <div className='content-form'>
      <h1>Advanced Filters</h1>
      {(token)? 
      <div className='content-search-form'>

          {/* div for left side form */}
          <div className='content-left-form'>
              <div className='content-form-1'>
                  <label>Keyword In bio:</label>
                  <input type="text" placeholder="Search for Keywords" name="bioname" value={formData.bioname} onChange={handleChange}/>
                  
                  

              </div>

              <div className='content-form-1'>
                  <label>Channels Tags:</label>
                  <input type="text" placeholder="Search for Tags"  name='tagname' value={formData.tagname} onChange={handleChange}/>
                  
                  

              </div>
              <div className='content-form-1'>
                <label>Has Shorts:</label> 
                <select name='hasShorts' value={formData.hasShorts} onChange={handleChange}>
                {selectYesNo.map((selectYesNo) => (
                  <option key={selectYesNo} value={selectYesNo}>
                    {selectYesNo}
                  </option>
                ))}
              </select>
                  
              </div>
            
              <div className='content-form-1'>
              <label>Has Membership:</label>
              <select name='hasMembership' value={formData.hasMembership} onChange={handleChange}>
                {selectYesNo.map((selectYesNo) => (
                  <option key={selectYesNo} value={selectYesNo}>
                    {selectYesNo}
                  </option>
                ))}
              </select>
              </div>
                  
              <div className='content-form-1'>
              <label>Made for Kids:</label>
              <select name='madeForKids' value={formData.madeForKids} onChange={handleChange}>
                {selectYesNo.map((selectYesNo) => (
                  <option key={selectYesNo} value={selectYesNo}>
                    {selectYesNo}
                  </option>
                ))}
              </select>

              </div>  

        </div >
        {/* div for right side form */}
        <div className='content-right-form'>
            
            <div className='basic-form-2'>
                <label>Videos/month:</label>
                <select name='averageVideoMin' value={formData.averageVideoMin} onChange={handleChange}>
                  {averageVideoMin.map((averageVideoMin) => (
                    <option key={averageVideoMin} value={averageVideoMin}>
                      {averageVideoMin}
                    </option>
                  ))}
                </select>
                <select name='averageVideoMax' value={formData.averageVideoMax} onChange={handleChange}>
                  {averageVideoMax.map((averageVideoMax) => (
                    <option key={averageVideoMax} value={averageVideoMax}>
                      {averageVideoMax}
                    </option>
                  ))}
                </select>
            </div>
            <div className='basic-form-2'>
                <label>Views/month:</label>
                <select name='averageViewMin' value={formData.averageViewMin} onChange={handleChange}>
                  {averageViewMin.map((averageViewMin) => (
                    <option key={averageViewMin} value={averageViewMin}>
                      {averageViewMin}
                    </option>
                  ))}
                </select>
                <select name='averageViewMax' value={formData.averageViewMax} onChange={handleChange}>
                  {averageViewMax.map((averageViewMax) => (
                    <option key={averageViewMax} value={averageViewMax}>
                      {averageViewMax}
                    </option>
                  ))}
                </select>
            </div>
            <div className='basic-form-2'>
                <label>Likes/month:</label>
                <select name='averageLikeMin' value={formData.averageLikeMin} onChange={handleChange}>
                  {averageLikeMin.map((averageLikeMin) => (
                    <option key={averageLikeMin} value={averageLikeMin}>
                      {averageLikeMin}
                    </option>
                  ))}
                </select>
                <select name='averageLikeMax' value={formData.averageLikeMax} onChange={handleChange}>
                  {averageLikeMax.map((averageLikeMax) => (
                    <option key={averageLikeMax} value={averageLikeMax}>
                      {averageLikeMax}
                    </option>
                  ))}
                </select>
            </div>
            <div className='basic-form-2'>
                <label>Comments/month:</label>
                <select name='averageCommentMin' value={formData.averageCommentMin} onChange={handleChange}>
                  {averageCommentMin.map((averageCommentMin) => (
                    <option key={averageCommentMin} value={averageCommentMin}>
                      {averageCommentMin}
                    </option>
                  ))}
                </select>
                <select name='averageCommentMax' value={formData.averageCommentMax} onChange={handleChange}>
                  {averageCommentMax.map((averageCommentMax) => (
                    <option key={averageCommentMax} value={averageCommentMax}>
                      {averageCommentMax}
                    </option>
                  ))}
                </select>
            </div>
            <div className='basic-form-2'>
                <label>Video Length Avg(min):</label>
                <select name='averageVideoLengthMin' value={formData.averageVideoLengthMin} onChange={handleChange}>
                  {averageVideoLengthMin.map((averageVideoLengthMin) => (
                    <option key={averageVideoLengthMin} value={averageVideoLengthMin}>
                      {averageVideoLengthMin}
                    </option>
                  ))}
                </select>
                <select name='averageVideoLengthMax' value={formData.averageVideoLengthMax} onChange={handleChange}>
                  {averageVideoLengthMax.map((averageVideoLengthMax) => (
                    <option key={averageVideoLengthMax} value={averageVideoLengthMax}>
                      {averageVideoLengthMax}
                    </option>
                  ))}
                </select>
            </div>
          
              
          
        </div>
        
      </div>
      :<div> <h3 className="blured-heading">If you should access these fucntionality , please login</h3>
      <div className='content-search-form blured-content'>
       

      {/* div for left side form */}
      <div className='content-left-form'>
          <div className='content-form-1'>
              <label>Keyword In bio:</label>
              <input type="text" placeholder="Search for Keywords" name="bioname" value={formData.bioname} onChange={handleChange}/>
              
              

          </div>

          <div className='content-form-1'>
              <label>Channels Tags:</label>
              <input type="text" placeholder="Search for Tags"  name='tagname' value={formData.tagname} onChange={handleChange}/>
              
              

          </div>
          <div className='content-form-1'>
            <label>Has Shorts:</label> 
            <select name='hasShorts' value={formData.hasShorts} onChange={handleChange}>
            {selectYesNo.map((selectYesNo) => (
              <option key={selectYesNo} value={selectYesNo}>
                {selectYesNo}
              </option>
            ))}
          </select>
              
          </div>
        
          <div className='content-form-1'>
          <label>Has Membership:</label>
          <select name='hasMembership' value={formData.hasMembership} onChange={handleChange}>
            {selectYesNo.map((selectYesNo) => (
              <option key={selectYesNo} value={selectYesNo}>
                {selectYesNo}
              </option>
            ))}
          </select>
          </div>
              
          <div className='content-form-1'>
          <label>Made for Kids:</label>
          <select name='madeForKids' value={formData.madeForKids} onChange={handleChange}>
            {selectYesNo.map((selectYesNo) => (
              <option key={selectYesNo} value={selectYesNo}>
                {selectYesNo}
              </option>
            ))}
          </select>

          </div>  

    </div >
    {/* div for right side form */}
    <div className='content-right-form '>
        
        <div className='basic-form-2'>
            <label>Videos/month:</label>
            <select name='averageVideoMin' value={formData.averageVideoMin} onChange={handleChange}>
              {averageVideoMin.map((averageVideoMin) => (
                <option key={averageVideoMin} value={averageVideoMin}>
                  {averageVideoMin}
                </option>
              ))}
            </select>
            <select name='averageVideoMax' value={formData.averageVideoMax} onChange={handleChange}>
              {averageVideoMax.map((averageVideoMax) => (
                <option key={averageVideoMax} value={averageVideoMax}>
                  {averageVideoMax}
                </option>
              ))}
            </select>
        </div>
        <div className='basic-form-2'>
            <label>Views/month:</label>
            <select name='averageViewMin' value={formData.averageViewMin} onChange={handleChange}>
              {averageViewMin.map((averageViewMin) => (
                <option key={averageViewMin} value={averageViewMin}>
                  {averageViewMin}
                </option>
              ))}
            </select>
            <select name='averageViewMax' value={formData.averageViewMax} onChange={handleChange}>
              {averageViewMax.map((averageViewMax) => (
                <option key={averageViewMax} value={averageViewMax}>
                  {averageViewMax}
                </option>
              ))}
            </select>
        </div>
        <div className='basic-form-2'>
            <label>Likes/month:</label>
            <select name='averageLikeMin' value={formData.averageLikeMin} onChange={handleChange}>
              {averageLikeMin.map((averageLikeMin) => (
                <option key={averageLikeMin} value={averageLikeMin}>
                  {averageLikeMin}
                </option>
              ))}
            </select>
            <select name='averageLikeMax' value={formData.averageLikeMax} onChange={handleChange}>
              {averageLikeMax.map((averageLikeMax) => (
                <option key={averageLikeMax} value={averageLikeMax}>
                  {averageLikeMax}
                </option>
              ))}
            </select>
        </div>
        <div className='basic-form-2'>
            <label>Comments/month:</label>
            <select name='averageCommentMin' value={formData.averageCommentMin} onChange={handleChange}>
              {averageCommentMin.map((averageCommentMin) => (
                <option key={averageCommentMin} value={averageCommentMin}>
                  {averageCommentMin}
                </option>
              ))}
            </select>
            <select name='averageCommentMax' value={formData.averageCommentMax} onChange={handleChange}>
              {averageCommentMax.map((averageCommentMax) => (
                <option key={averageCommentMax} value={averageCommentMax}>
                  {averageCommentMax}
                </option>
              ))}
            </select>
        </div>
        <div className='basic-form-2'>
            <label>Video Length Avg:</label>
            <select name='averageVideoLengthMin' value={formData.averageVideoLengthMin} onChange={handleChange}>
              {averageVideoLengthMin.map((averageVideoLengthMin) => (
                <option key={averageVideoLengthMin} value={averageVideoLengthMin}>
                  {averageVideoLengthMin}
                </option>
              ))}
            </select>
            <select name='averageVideoLengthMax' value={formData.averageVideoLengthMax} onChange={handleChange}>
              {averageVideoLengthMax.map((averageVideoLengthMax) => (
                <option key={averageVideoLengthMax} value={averageVideoLengthMax}>
                  {averageVideoLengthMax}
                </option>
              ))}
            </select>
        </div>
      
          
      
    </div>
    
  </div> </div>}
    </div>
  );
};


export default ContentSearch
