import React, { useRef } from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { sendSearch } from '../../../redux/actions/videoActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const text = useRef('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let query = text.current.value;
    dispatch(sendSearch(query));
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
