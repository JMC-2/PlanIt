import React, { useState, useEffect } from 'react';
//import child components/ containers
import TodoForToday from './TodoForToday';
import BackLog from './BackLog';
import HourlyCalendar from './HourlyCalendar';
import Navbar from './Navbar';
import '../styles/HomePage.css';

const HomePage = ({ username, userId }) => {

  // let data;  

  const [data, setData] = useState([]);

  const userToDoList = async () => {
    // e.preventDefault();
    const body = { userId: userId, username:username };
    console.log('req body: ', body);
    try {
      //NEED CORRECT ENDPOINT
      const res = await fetch('/api/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
      })
      const dataGetBack = await res.json();
      // name of the todolist
      console.log('data from home page', dataGetBack)
      setData(dataGetBack)
      //assume body is an object
    } catch (error) {
      console.log(error.message);
    }
  };

  // const userToDoList = () => {
  //   const body = { userId: userId, username: username };
  //   console.log('req body: ', body);
  
  //   fetch('/api/task', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //       },
  //       body: JSON.stringify(body),
  //   })
  //   .then(res => res.json())
  //   .then(dataGetBack => setData(dataGetBack))
  //   .catch((error) => {
  //     console.log(error.message);
  //   })
  // };

  useEffect(()=> {
    userToDoList();
  },[])
  
  return (
    <div>
      <Navbar username={username} userId={userId} data={data}/>
      <div className='underNav'>
        <HourlyCalendar userId={userId} data={data}/>
        <div className='rightSide'>
          <TodoForToday username={username} userId={userId} data={data}/>
          <BackLog username={username} userId={userId} data={data}/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
