import React from 'react';
import MyButton from '../../UI/MyButton/MyButton';

function PagesButtonArea(props: {
  totalPages: number;
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const pages = Array(props.totalPages)
    .fill(1)
    .map((v, i) => v + i);
  return (
    <div>
      {pages.map((v) => (
        <MyButton
          active={props.activePage === v}
          key={v}
          onClick={() => props.setActivePage(v)}
        >
          {v}
        </MyButton>
      ))}
    </div>
  );
}

export default PagesButtonArea;
