import React from 'react';
import { ShipType } from '../../../Utils/Api/getShips';
import './ShipCard.css';

function ShipCard(props: ShipType) {
  return (
    <div className="ship-card">
      <h3 style={{ textAlign: 'center' }}>Star Ship: {props.name} </h3>
      <h4>model: {props.model}</h4>
      <h4>length: {props.length}</h4>
      <h4>speed: {props.max_atmosphering_speed}</h4>
      <h4>passengers: {props.passengers}</h4>
    </div>
  );
}

export default ShipCard;
