import React, { useState } from 'react'
import Cardsdata from "./Data.jsx";
import Search from './Search';
import Cart from './Cart';

const Home = () => {
    const [cartData, setCartData] = useState(Cardsdata);
    const [searchText, setSearchText] = useState("");

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedGender, setSelectedGender] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState('All');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };
    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };
    const filteredData = cartData
        .filter((item) => selectedCategory === 'All' || item.category === selectedCategory)
        .filter((item) => selectedGender === 'All' || item.gender === selectedGender)
        .filter((item) => item.dish.toLowerCase().includes(searchText.toLowerCase()))
        .filter((item) => {
            if (selectedPrice === "All") return true;
            if (selectedPrice === "1000-2000") return item.price >= 1000 && item.price <= 2000;
            if (selectedPrice === "2000-3000") return item.price > 2000 && item.price <= 3000;
            if (selectedPrice === "3000-4000") return item.price >= 3000 && item.price <= 4000;
            if (selectedPrice === "4000-5000") return item.price >= 4000 && item.price <= 5000;
            return true;
        });
    return (
        <div>
            <Search selectedCategory={selectedCategory} selectedGender={selectedGender} handleCategoryChange={handleCategoryChange} handleGenderChange={handleGenderChange} handleSearchNote={setSearchText} handlePriceChange={handlePriceChange} selectedPrice={selectedPrice} />
            <Cart filteredData={filteredData} />
        </div>
    )
}

export default Home
