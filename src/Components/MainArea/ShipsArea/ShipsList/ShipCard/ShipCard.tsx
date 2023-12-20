import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShipType } from '../../../../../Api/getShips';
import classes from './ShipCard.module.css';

function ShipCard(props: { ship: ShipType }) {
  const navigate = useNavigate();
  return (
    <div
      className={classes.card}
      onClick={(event) => {
        event.stopPropagation();
        navigate(
          `/detail/${props.ship.url
            ?.split('/')
            .filter((v) => v)
            .slice(-1)
            .join('')}`
        );
      }}
    >
      <h3 className={classes.h3}>{props.ship.name} </h3>
      <h4 className={classes.h4}>model: {props.ship.model}</h4>
      <h4 className={classes.h4}>length: {props.ship.length}</h4>
      <h4 className={classes.h4}>speed: {props.ship.max_atmosphering_speed}</h4>
      <h4 className={classes.h4}>passengers: {props.ship.passengers}</h4>
    </div>
  );
}

export default ShipCard;
