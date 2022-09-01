import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Rank from './pages/Rank';
import Tutorial from './pages/Tutorial';


function App() {
  return (
    <div className="App-layout">
      <Router>
        <nav>
          <img src={logo} alt="Nagwa company logo" />
        </nav>
        <Routes>
          <Route path='/' element={<Tutorial />} />
          <Route path='/home' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/rank' element={<Rank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
