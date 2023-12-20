import { Circles } from 'react-loader-spinner';
import ShipsList from './ShipsList/ShipsList';
import { ShipType } from '../../../Api/getShips';
import { CSSTransition } from 'react-transition-group';

function ShipsArea(props: { load: boolean; ships: ShipType[] }) {
  return (
    <>
      <Circles color="grey" visible={props.load} />
      <CSSTransition
        in={!props.load}
        timeout={300}
        classNames="animate"
        mountOnEnter
        unmountOnExit
      >
        <ShipsList ships={props.ships} />
      </CSSTransition>
    </>
  );
}

export default ShipsArea;
