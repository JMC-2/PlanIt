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


  return (
    <nav className='navbar'>
      <div className='leftNav'>
        <input type='date' id='date' name='date' ></input>
      </div>

      <div className='rightNav'>
        <button onClick={toggleAddTaskModal}>Add Task</button>
        <Modal
          showAddTaskModal={showAddTaskModal}
          toggleAddTaskModal={toggleAddTaskModal}
          userId={userId}
          username={username}
        />
      </div>
    </nav>
  );
};

export default Navbar;
