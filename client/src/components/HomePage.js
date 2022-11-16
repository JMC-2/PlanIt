import React, { useState } from 'react';
//import child components/ containers
import TodoForToday from './TodoForToday';
import BackLog from './BackLog';
import HourlyCalendar from './HourlyCalendar';
import Navbar from './Navbar';
import '../styles/HomePage.css';

const HomePage = ({ username, userId }) => {
  return (
    <div>
      <Navbar username={username} userId={userId}/>
      <div className='underNav'>
        <HourlyCalendar />
        <div className='rightSide'>
          <TodoForToday username={username} userId={userId} />
          <BackLog username={username} userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
