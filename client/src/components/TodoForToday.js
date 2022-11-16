import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/TodoForToday.css';
import TodoInputBox from './TodoInput';
import Modal from './AddTaskModal';

const TodoForToday = ({ username, userId }) => {
  const [inputText, setInputText] = useState('');
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  // const userToDoList = async (e) => {
  //   e.preventDefault();
  //   const body = { username: username };
  //   try {
  //     //NEED CORRECT ENDPOINT
  //     fetch('/api/trask', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     const data = JSON.stringify(body);
  //     // name of the todolist
  //     setInputText(body.name);
  //     //assume body is an object
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const UpdateToDoList = async (e) => {
    e.preventDefault();
    const body = {
      userId: userId,
      username: username,
      inputName: inputName,
      describtion: describtion,
    };
    try {
      //NEED CORRECT ENDPOINT
      fetch('/api/update', {
        method: 'PATCH',
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

  const compeleteToDoList = async (e) => {
    e.preventDefault();
    const body = {
      userId: userId,
      inputName: inputName,
      completed: true,
    };
    try {
      //NEED CORRECT ENDPOINT
      fetch('/api/complete', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
      });
      const data = JSON.stringify(body);
      // name of the todolist
      setInputText(body.name);
      //assume body is an object
    } catch (error) {
      console.log(error.message);
    }

    useEffect(() => {
      UpdateToDoList();
    }, []);
  };

  return (
    <div className='todo'>
      <h1>To-Dos For Today</h1>
      <TodoInputBox />
      <div className='rightNav'>
        <button onClick={toggleAddTaskModal}>Update</button>
        <Modal
          showAddTaskModal={showAddTaskModal}
          toggleAddTaskModal={toggleAddTaskModal}
        />
      </div>
    </div>
  );
};

export default TodoForToday;
