import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Feature from './components/Feature/Feature';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/shop/Shop';
import About from './components/AboutUs/AboutUs';
import Classes from './components/Classes/Cards';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/feature' element={<Feature/>}/>
        <Route exact path='/shop' element={<Shop/>}/>
        <Route exact path='/classes-card' element={<Classes/>}/>
        <Route exact path='/about-us' element={<About/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route path="*" element={<Notfound/>}/>
            
      </Routes>
    </div>
    </Router>
  );
}

export default App;
