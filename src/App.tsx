import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ExtraArea from './Components/ExtraArea/ExtraArea';
import MainArea from './Components/MainArea/MainArea';
import { AppDataContext } from './context';

function App() {
  const [urlForDetail, setUrlForDetail] = useState('');
  return (
    <AppDataContext.Provider value={{ urlForDetail, setUrlForDetail }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainArea />}>
            <Route path="detail/:id" element={<ExtraArea />} />
          </Route>
          <Route path="*" element={<h1>OOOps!!!</h1>} />
        </Routes>
      </HashRouter>
    </AppDataContext.Provider>
  );
}

export default App;
