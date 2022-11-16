import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ReactDOM from 'react-dom';


const App = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');

  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<HomePage username={username} userId={userId}/>} />
        <Route path='/login' element={<Login setUsername={setUsername} setUserId={setUserId}/>} /> */}
        <Route path='/home' element={<HomePage username={username} userId={userId}/>} />
        <Route path='/' element={<Login setUsername={setUsername} setUserId={setUserId}/>} />
        <Route path='/signup' element={<Signup setUsername={setUsername} setUserId={setUserId}/>} />
      </Routes>
    </div>
  );
};

export default App;
