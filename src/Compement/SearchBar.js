import React, { useState } from 'react';
import './SearchBar.scss';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    // call the function to return the value of searchBar 
    onSearch(inputValue);
  };

  return (
    <div className="containers">
      <div className="container__item">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="text" 
            className="form__field" 
            placeholder="Search Word ..." 
            value={inputValue} 
            onChange={handleInputChange} 
          />
          <button 
            type="button" 
            className="btn btn--primary btn--inside uppercase" 
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
