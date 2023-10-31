import { Component } from 'react';
import TopArea from './Components/TopArea/TopArea';
import MyButton from './Components/UI/MyButton/MyButton';

class App extends Component {
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>React components</h1>
        <MyButton>Error</MyButton>
        <TopArea />
      </>
    );
  }
}

export default App;
