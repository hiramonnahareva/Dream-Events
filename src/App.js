
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import "swiper/css";
import "swiper/css/pagination";
import NotFound from './Pages/NotFound';
import Service from './Pages/Services/Service';
import Services from './Pages/Services/Services';
import NavBar from './Component/Navbar/NavBar';
import Contact from './Pages/Contact/Contact';
import Events from './Pages/Events/Events';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className=''>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/service/:id' element={<Service/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/events' element={<Events/>}></Route>

        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
