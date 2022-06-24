import './styles.css'
import React from 'react'


 function SearchBar({ searchValue, handleChange }) {
  return (
    <div className='input-container'>

    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder='Procurar na PokeDéx'
      />
      </div>
  )
}
export default SearchBar;