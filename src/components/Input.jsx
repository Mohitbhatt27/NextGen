import React, { useState, useEffect, useCallback } from 'react';
import SuggestList from './suggestion'

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  // const fetchSuggestions = async (query) => {
  //   try {
  //     const response = await fetch(`https://dummyjson.com/recipe/search?q=${query}`);
  //     setSuggestions(response.data)
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setSuggestions([]);
  //   }
  // };

  const debouncedFetchSuggestions = useCallback(
    debounce((query)=>query, 500), []
  );

  useEffect(() => {
    if (inputValue) {
      debouncedFetchSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue, debouncedFetchSuggestions]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value) {
      const result = SuggestList.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(result);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        className='p-1 font-nunito bg-inherit px-2 text-lg font-normal outline-none rounded-lg border-2 border-green-500'
        value={inputValue}
        onChange={handleChange}
        placeholder="Search here..."
      />
      {suggestions.length > 0 && (
        <ul className='absolute font-normal text-lg'>
          {suggestions.map((item, id) => (
            <li className='hover:text-green-600 font-nunito'
              key={id}
              onClick={() => handleSelect(item)}
              style={{ 
                padding: '8px', 
                cursor: 'pointer', 
                backgroundColor: id % 2 === 0 ? '#f9f9f9' : '#fff' 
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;