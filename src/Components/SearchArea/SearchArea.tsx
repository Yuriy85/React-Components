import React from 'react';
import './SearchArea.css';
import MyButton from '../UI/MyButton/MyButton';

function SearchArea() {
  function search(event: Event) {
    event.preventDefault();
    console.log(event.target as HTMLElement);
  }
  return (
    <form style={{ margin: '5px' }}>
      <input style={{ padding: '5px' }} type="text" />
      <MyButton onClick={search}>Search</MyButton>
    </form>
  );
}

export default SearchArea;
