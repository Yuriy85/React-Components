import { Circles } from 'react-loader-spinner';
import ShipsList from './ShipsList/ShipsList';
import { ShipType } from '../../../Api/getShips';

function ShipsArea(props: {
  load: boolean;
  ships: ShipType[];
  getShipUrl: (shipUrl: string | undefined) => void;
}) {
  return props.load ? (
    <Circles color="grey" visible={props.load} />
  ) : (
    <ShipsList ships={props.ships} getShipUrl={props.getShipUrl} />
  );
}

export default ShipsArea;
