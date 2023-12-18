import { ShipType } from '../../../Api/getShips';
import classes from './DetailedCard.module.css';

function DetailedCard(props: { ship: ShipType }) {
  return (
    <div className={classes.card}>
      <h3 className={classes.h3}>{props.ship.name} </h3>
      <h4 className={classes.h4}>model: {props.ship.model}</h4>
      <h4 className={classes.h4}>length: {props.ship.length}</h4>
      <h4 className={classes.h4}>speed: {props.ship.max_atmosphering_speed}</h4>
      <h4 className={classes.h4}>passengers: {props.ship.passengers}</h4>
    </div>
  );
}

export default DetailedCard;
