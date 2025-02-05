import React from 'react'
import BasicSearch from '../Components/BasicSearch/BasicSearch'
import ContentSearch from '../Components/ContentSearch/ContentSearch'

import './Search.css'

const Search = () => {
  return (
    <div className="search" id='search'>
        <div className='search-heading'>
            <h1>Start a Search</h1>
            <p>Use basic filters & see limited results for free or get login to unlock all features.</p>
            <hr />
        </div>
        <BasicSearch />
      
    </div>
  )
}

export default Search