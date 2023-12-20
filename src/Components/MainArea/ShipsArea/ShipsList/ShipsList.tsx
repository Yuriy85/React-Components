import React from 'react';
import { ShipType } from '../../../../Api/getShips';
import ShipCard from './ShipCard/ShipCard';
import './ShipList.css';

function ShipsList(props: { ships: ShipType[] }) {
  return (
    <div className="ships-list">
      {props.ships.map((ship) => (
        <ShipCard key={ship.name} ship={ship} />
      ))}
    </div>
  );
}

export default ShipsList;
