import { ShipType } from '../src/Api/getShips';

function sortShips(filterData: ShipType[], type: 'name' | 'length' | 'model') {
  return type === 'length'
    ? [...filterData].sort((a, b) => +a[type] - +b[type])
    : [...filterData].sort((a, b) => a[type].localeCompare(b[type]));
}

export default sortShips;
