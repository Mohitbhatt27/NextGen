import React, { useState, useEffect, useCallback, useRef } from 'react';
import SuggestList from './suggestion'
import Input from './Input.jsx';
import search from '../assets/icons/search.png'

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const inputRef=useRef(null)
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();  // Accessing the input element directly
    }
  }

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
      <img className='w-7' src={search} alt="" />
      <Input className='p-1 font-nunito bg-inherit px-2 text-lg font-normal outline-none rounded-lg border-2 border-green-500' id='search' ref={inputRef} placeholder='Search here...' />
      {/* {suggestions.length > 0 && (
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
      )} */}
      <button onClick={focusInput}>click</button>
    </div>
  );
};

export default AutoComplete;