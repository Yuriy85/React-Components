import React from 'react';
import SearchArea from '../SearchArea/SearchArea';
import MyButton from '../UI/MyButton/MyButton';
import './TopArea.css';

function TopArea() {
  function myError() {
    throw new Error('Oops!!!');
  }
  return (
    <>
      <MyButton onClick={myError}>Error</MyButton>
      <SearchArea />
    </>
  );
}

export default TopArea;
