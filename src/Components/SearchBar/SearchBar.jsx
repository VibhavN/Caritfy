import React, { useState }  from 'react'
import './SearchBar.css'

import searchIcon from '../Assets/search.png'

export const SearchBar = ({ placeholder, onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }

  return (
    <div className='search-bar'>
        <img src={searchIcon} alt="Search Icon" className='search-icon' />
        <input 
            type="text" 
            value= {searchTerm}
            onChange = {handleChange}
            placeholder= {placeholder}
            className='search-input'
        />
    </div>
  )
}

export default SearchBar