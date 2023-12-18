import React from 'react';
import SearchArea from './SearchArea/SearchArea';
import ItemPerPageArea from './ItemPerPageArea/ItemPerPageArea';
import SortArea, { Sort } from './SortArea/SortArea';
import classes from './AreaForChange.module.css';

function AreaForChange(props: {
  max: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
  loading: boolean;
  onchange: (event: Event, searchWord: string) => void;
}) {
  return (
    <div className={classes.change}>
      <ItemPerPageArea
        loading={props.loading}
        max={props.max}
        setCount={props.setCount}
      />
      <SortArea loading={props.loading} setSort={props.setSort} />
      <SearchArea loading={props.loading} onchange={props.onchange} />
    </div>
  );
}

export default AreaForChange;
