import React from 'react'

const SearchBar = ({ onSearchChange }) =>
  (
    <div className='input-group'>
      <input
        type='search'
        className='form-control search-input m-2'
        placeholder='Type to search'
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )

export default SearchBar
