import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/TodoForToday.css';
import TodoInputBox from './TodoInput';

 
const TodoForToday = ({ username, userId, data }) => {

  // console.log('data from todolist',data)

  // const compeleteToDoList = async (e) => {
  //   e.preventDefault();
  //   const body = {
  //     userId: userId,
  //     inputName: inputName,
  //     completed: true,
  //   }; 
  //   try {
  //     //NEED CORRECT ENDPOINT
  //     const res = await fetch('/api/complete', {
  //       method: 'PATCH',
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     const dataGetBack = await res.json();
  //     // name of the todolist
     
  //     //assume body is an object
  //   } catch (error) {
  //     console.log(error.message);
  //   }

    // useEffect(() => {
    //   UpdateToDoList();
    // }, []);
  // };

  return (
    <div className='todo'>
      <h1 className="heading">To Do :</h1>
      <TodoInputBox userId={userId} data={data}/>
    </div>
  );
};

export default TodoForToday;
