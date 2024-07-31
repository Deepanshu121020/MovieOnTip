import MainElement from './components/MainElement';
import './index.css'; // Make sure this is correct and the file exists
import Homepage from './pages/Homepage/Homepage';
// import Navbar from './pages/Homepage/Navbar';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/home' element={<Homepage/>} />
        <Route path='/card' element={<MainElement/>} />
      </Routes>
    </Router>
  );
}

export default App;
