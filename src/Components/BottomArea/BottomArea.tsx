import React, { useEffect, useState } from 'react';
import './BottomArea.css';
import { getShips, ShipType } from '../../../Utils/Api/getShips';
import { Circles } from 'react-loader-spinner';
import ShipsList from '../ShipsList/ShipsList';

type ShipsData = { load: boolean; ships: ShipType[] };

function BottomArea() {
  const [shipsData, setShipsData] = useState<ShipsData>({
    load: false,
    ships: [],
  });

  useEffect(() => {
    getShipsData();
  }, []);

  async function getShipsData() {
    try {
      setShipsData({ load: true, ships: [] });
      const data = await getShips();
      setShipsData({ load: false, ships: data });
    } catch (error) {
      error as Error;
    }
  }

  return shipsData.load ? (
    <Circles color="grey" visible={shipsData.load} />
  ) : (
    <ShipsList ships={shipsData.ships} />
  );
}

export default BottomArea;
