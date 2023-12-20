import { HashRouter, Route, Routes } from 'react-router-dom';
import ExtraArea from './Components/ExtraArea/ExtraArea';
import MainArea from './Components/MainArea/MainArea';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainArea />}>
          <Route path="detail/:id" element={<ExtraArea />} />
        </Route>
        <Route path="*" element={<h1>OOOps!!!</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
