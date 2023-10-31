import { Component } from 'react';
import { ShipType } from '../../../Utils/Api/getShips';
import './Cards.css';

class Cards extends Component<ShipType, ShipType> {
  constructor(props: ShipType) {
    super(props);
    this.state = {
      name: this.props.name,
      model: this.props.model,
      length: this.props.length,
      max_atmosphering_speed: this.props.max_atmosphering_speed,
      passengers: this.props.passengers,
    };
  }
  render() {
    return (
      <div className="card">
        <h3 style={{ textAlign: 'center' }}>Star Ship: {this.state.name} </h3>
        <h4>model: {this.state.model}</h4>
        <h4>length: {this.state.length}</h4>
        <h4>speed: {this.state.max_atmosphering_speed}</h4>
        <h4>passengers: {this.state.passengers}</h4>
      </div>
    );
  }
}

export default Cards;
