
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/home' element={<Home/>} />
  
    </Routes>
    </>
  );
}

export default App;
