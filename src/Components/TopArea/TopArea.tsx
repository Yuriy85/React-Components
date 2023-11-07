import React from 'react';
import SearchArea from './SearchArea/SearchArea';
import MyButton from '../UI/MyButton/MyButton';
import './TopArea.css';

function TopArea(props: {
  max: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  badRequest: (...args: unknown[]) => Promise<void>;
  onchange: (event: Event, searchWord: string) => void;
}) {
  return (
    <>
      <div>
        <select
          className="select"
          onChange={(event) => {
            props.setCount(+event.target.value);
          }}
        >
          <option disabled>Choose count per page</option>
          <option value={5}>5 cards per page</option>
          <option value={10}>10 cards per page</option>
          <option value={props.max}>All</option>
        </select>
        <MyButton
          onClick={() => {
            props.badRequest('Very bad request');
            throw new Error('My bad request');
          }}
        >
          Error
        </MyButton>
      </div>
      <SearchArea loading={props.loading} onchange={props.onchange} />
    </>
  );
}

export default TopArea;
