import logo from './assets/logo.svg';
import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Rank from './pages/Rank';
import Tutorial from './pages/Tutorial';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App-layout">
      <Router>
        <nav>
          <img src={logo} alt="Nagwa company logo" />
        </nav>
        <Routes>
          <Route path='/' element={<Tutorial />} />
          <Route path='/home' element={<Home name={name} setName={setName}/>} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/rank' element={<Rank name={name}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
