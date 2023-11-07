import React from 'react';
import './MiddleArea.css';
import { Circles } from 'react-loader-spinner';
import ShipsList from './ShipsList/ShipsList';
import { ShipType } from '../../Api/getShips';

function MiddleArea(props: {
  shipsData: { load: boolean; ships: ShipType[] };
}) {
  return props.shipsData.load ? (
    <Circles color="grey" visible={props.shipsData.load} />
  ) : (
    <ShipsList ships={props.shipsData.ships} />
  );
}

export default MiddleArea;
