import React from 'react';
import '../styles/TodoForToday.css';

const TodoForToday = () => {
  const userToDoList = async (e) => {
    e.preventDefault();
    const body = { username: username };
    try {
      //NEED CORRECT ENDPOINT
      fetch('/somewherebackend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
      });
      const data = JSON.stringify(body);
      //assume body is an object
    } catch (error) {
      console.log(error.message);
    }
  };

  const UpdateToDoList = async (e) => {
    e.preventDefault();
    const body = {
      username: username,
      nameofDetail: name,
      describtion: describtion,
    };
    try {
      //NEED CORRECT ENDPOINT
      fetch('/somewherebackend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
      });
      const data = JSON.stringify(body);
      //assume body is an object
    } catch (error) {
      console.log(error.message);
    }
  };

  return <div className='todo'>To-Dos For Today</div>;
};

export default TodoForToday;
