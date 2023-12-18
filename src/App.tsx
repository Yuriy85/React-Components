import { useState } from 'react';
import { getOnlyOneShip } from './Api/getShips';
import ExtraArea from './Components/ExtraArea/ExtraArea';
import MainArea from './Components/MainArea/MainArea';

function App() {
  const [shipUrlForDetail, setShipUrlForDetail] = useState<string | undefined>(
    ''
  );
  function getShipUrl(shipUrl: string | undefined) {
    getOnlyOneShip(shipUrl as string);
    setShipUrlForDetail(shipUrl);
  }
  return (
    <>
      <MainArea getShipUrl={getShipUrl} changeUrl={setShipUrlForDetail} />
      <ExtraArea url={shipUrlForDetail} setUrl={setShipUrlForDetail} />
    </>
  );
}

export default App;
