import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import './App.css';


function App() {
  return (
    <div className="App dark:bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
