import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
      <div className='App'>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
  );
}

export default App;
