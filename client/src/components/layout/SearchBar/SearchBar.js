import React, { useRef } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const text = useRef('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(text.current.value);
  };

  return (
    <div className='search-bar-wrapper'>
      <form onSubmit={onSubmitHandler}>
        <input placeholder='Search Videos..' required ref={text} />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
