import React from 'react';
import Adminlogin from './Components/Adminlogin';
import Account from './Components/Account';
import {Route, Routes,Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage';
import Categories from './Components/Categories';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
// import Footer from './Components/Footer';
import Admin from'./Components/Admin';
// import Navbar from './Components/Navbar';
import Header from './Components/Header';
// import Homepage from './Components/Homepage';
// import Categories from
function App() {
    return (
          <div className='App'>
            {/* <Admin/> */}
            {/* <Navbar/> */}
            {/* <Header/> */}
            <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/account" element={<Account/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="*" element={<Navigate to="/Adminlogin" />} />
            <Route path="*" element={<Navigate to="/Account" />} />
          </Routes>
          </div>
      );
    }
    
    export default App;
    
    // import { Counter } from "./Components/Counter";
// import { Navigationbar } from "./Navigationbar";
// function App()
// {
//   return(
//   <div className="App">
//     <Navigationbar/>
//     {/* <Counter/> */}
//   </div>
//   )
// }
// export default App;