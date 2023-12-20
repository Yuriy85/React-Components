import { ShipType } from '../src/Api/getShips';

function filterShips(searchData: ShipType[], searchWord: string) {
  const filteredShips = [...searchData].filter((ship) =>
    ship.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return filteredShips;
}

export default filterShips;
