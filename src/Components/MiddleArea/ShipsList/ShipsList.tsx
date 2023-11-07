import React from 'react';
import { ShipType } from '../../../Api/getShips';
import ShipCard from './ShipCard/ShipCard';

function ShipsList({ ships: props }: { ships: ShipType[] }) {
  return (
    <div className="ships-list">
      {props.map((ship, index) => (
        <ShipCard
          key={index}
          length={ship.length}
          max_atmosphering_speed={ship.max_atmosphering_speed}
          model={ship.model}
          name={ship.name}
          passengers={ship.passengers}
        />
      ))}
    </div>
  );
}

export default ShipsList;
