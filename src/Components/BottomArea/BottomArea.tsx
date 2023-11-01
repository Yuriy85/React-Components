import { Component } from 'react';
import './BottomArea.css';
import { getShips, ShipType } from '../../../Utils/Api/getShips';
import Cards from '../Cards/Cards';
import { Circles } from 'react-loader-spinner';

class BottomArea extends Component {
  state: { load: boolean; shipsData: ShipType[] };
  ships: () => Promise<ShipType[]>;
  constructor(props: object) {
    super(props);
    this.ships = getShips;
    this.state = { load: true, shipsData: [] };
  }

  async getShipsData() {
    try {
      const data = await this.ships();
      this.setState({ load: false, shipsData: data });
    } catch (error) {
      error as Error;
    }
  }

  render() {
    this.getShipsData();
    let ships: JSX.Element | null = null;

    if (!this.state.load) {
      ships = (
        <div className="ships-list">
          {this.state.shipsData.map((ship, index) => (
            <Cards
              key={index}
              length={ship.length}
              max_atmosphering_speed={ship.max_atmosphering_speed}
              model={ship.model}
              name={ship.name}
              passengers={ship.passengers}
            />
          ))}
        </div>
      );
    }

    return (
      <>
        <Circles color="grey" visible={this.state.load} />
        {ships}
      </>
    );
  }
}

export default BottomArea;
