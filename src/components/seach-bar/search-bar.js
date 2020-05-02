import React from 'react'

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className='input-group'>
      <input
        type='text'
        className='form-control search-input m-2'
        placeholder='Type to search'
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
