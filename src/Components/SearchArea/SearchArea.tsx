import { Component } from 'react';
import './SearchArea.css';
import MyButton from '../UI/MyButton/MyButton';

class SearchArea extends Component {
  render() {
    return (
      <div style={{ margin: '5px' }}>
        <input style={{ padding: '5px' }} type="text" />
        <MyButton>Search</MyButton>
      </div>
    );
  }
}

export default SearchArea;
