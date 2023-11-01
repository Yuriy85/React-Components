import { Component } from 'react';
import BottomArea from './Components/BottomArea/BottomArea';
import TopArea from './Components/TopArea/TopArea';
import MyButton from './Components/UI/MyButton/MyButton';

class App extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>React components</h1>
        <MyButton>Error</MyButton>
        <TopArea />
        <BottomArea />
      </>
    );
  }
}

export default App;
