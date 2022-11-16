import React, { useState } from 'react';
import Button from './Button';
import Modal from './AddTaskModal';
// import css
import '../styles/Navbar.css';

const Navbar = ({ username, userId }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  const userToDoListforThisDate = async (e) => {
    e.preventDefault();
    const body = { userId: userId, date: e.target.date.value };
    try {
      //NEED CORRECT ENDPOINT
      fetch('/api/trask', {
        method: 'POST',
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
  };

  return (
    <nav className='navbar'>
      <div className='leftNav'>
        <input type='date' id='date' name='date'></input>
      </div>

      <div className='rightNav'>
        <button onClick={toggleAddTaskModal}>Add Task</button>
        <Modal
          showAddTaskModal={showAddTaskModal}
          toggleAddTaskModal={toggleAddTaskModal}
        />
      </div>
    </nav>
  );
};

export default Navbar;
