
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
// import Login from './Pages/Login/Login';
// import Register from './Pages/Login/Register';
// import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound';
import Service from './Pages/Services/Service';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/service/:id' element={<Service/>}></Route>
        <Route path='/about' element={<About/>}></Route>

        {/* <Route path='/register' element={<Register />}></Route> */}
        {/* <Route path='/login' element={<Login></Login>}></Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
