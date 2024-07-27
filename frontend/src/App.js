import React from 'react';
// import Adminlogin from './Components/Adminlogin';
// import {Route, Routes } from 'react-router-dom';
// import Login from './Components/Login';
// import Register from './Components/Register';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
// import Admin from'./Components/Admin';
function App() {
    return (
          <div className='App'>
            {/* <Admin/> */}
            <Homepage/>
            {/* <Routes>
    
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes> */}
          <Footer/>
          {/* <Adminlogin/> */}
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
// export default App;