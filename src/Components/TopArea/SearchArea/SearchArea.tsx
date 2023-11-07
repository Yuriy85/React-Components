import React, { useState } from 'react';
import './SearchArea.css';
import MyButton from '../../UI/MyButton/MyButton';
import MyInput from '../../UI/MyInput/MyInput';

function SearchArea(props: {
  loading: boolean;
  onchange: (event: Event, searchWord: string) => void;
}) {
  const [inputValue, setInputValue] = useState('');

  return (
    <form className="search">
      <MyInput
        disabled={props.loading}
        value={inputValue}
        onChange={(event: Event) =>
          setInputValue((event?.target as HTMLInputElement).value)
        }
        className="search__area"
        type="text"
        placeholder="Search..."
      />
      <MyButton onClick={(event: Event) => props.onchange(event, inputValue)}>
        Search
      </MyButton>
    </form>
  );
}

export default SearchArea;
