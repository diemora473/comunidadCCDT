import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App dark:bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
