import React from 'react';
import { ShipType } from '../../../../Api/getShips';
import ShipCard from './ShipCard/ShipCard';
import './ShipList.css';

function ShipsList(props: {
  ships: ShipType[];
  getShipUrl: (shipUrl: string | undefined) => void;
}) {
  return (
    <div className="ships-list">
      {props.ships.map((ship) => (
        <ShipCard
          ship={ship}
          openExtraArea={props.getShipUrl}
          key={ship.name}
        />
      ))}
    </div>
  );
}

export default ShipsList;
