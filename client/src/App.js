import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Rank from './pages/Rank';
import Tutorial from './pages/Tutorial';

import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div className="App-layout">
      <Router>
        
        <Navbar />

        <Routes>
          <Route path='/' element={<Tutorial />} />
          <Route path='/home' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/rank' element={<Rank />} />
        </Routes>

        <ToastContainer pauseOnHover={false} hideProgressBar={true} autoClose={false}/>
      
      </Router>

    </div>
  );
}

export default App;
