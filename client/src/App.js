// import React from "react";
// //import child components/ containers
// import HomePage from './components/HomePage';

// const App = () => {
//     return (
//         // className holder in place
//         <div className="holder">
//             <HomePage />
//         </div>
//     )
// }

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login'
import HomePage from './components/HomePage';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
