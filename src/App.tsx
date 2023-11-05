import React from 'react';
import BottomArea from './Components/BottomArea/BottomArea';
import TopArea from './Components/TopArea/TopArea';
import MyButton from './Components/UI/MyButton/MyButton';

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>ReactRSSchool</h1>
      <MyButton>Error</MyButton>
      <TopArea />
      <BottomArea />
    </>
  );
}

export default App;
