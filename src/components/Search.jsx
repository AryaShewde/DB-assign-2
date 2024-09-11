import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ handleSearchNote, handleCategoryChange, handleGenderChange, selectedCategory, selectedGender, selectedPrice, handlePriceChange }) => {
  return (
    <>
      <div className='search'>
        <div className='mainsearch'>
          <input onChange={(event) => { handleSearchNote(event.target.value) }} type="text" placeholder='Search....' />
          <IoSearchSharp className='search_icon'/>
        </div>
        <div className='filters'>
          <select className='dropdown' value={selectedCategory} onChange={handleCategoryChange}>
            <option value="All">All</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="bata">Bata</option>
          </select>
          <select className='dropdown' value={selectedGender} onChange={handleGenderChange}>
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select className='dropdown' value={selectedPrice} onChange={handlePriceChange}>
            <option value="All">All</option>
            <option value="1000-2000">1000-2000</option>
            <option value="2000-3000">2000-3000</option>
            <option value="3000-4000">3000-4000</option>
            <option value="4000-5000">4000-5000</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Search