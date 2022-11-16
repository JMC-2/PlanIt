import React, { useState } from 'react';
import Button from './Button';
import Modal from './AddTaskModal';
import '../styles/Navbar.css';

const Navbar = ({ username, userId }) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };


  return (
    <nav className='navbar'>
      <div className='leftNav'>
        <input className='calendarButton' type='date' id='date' name='date'></input>
      </div>

      <div className='rightNav'>
        <button className='taskButton' onClick={toggleAddTaskModal}>
        <img className="plus" id="plus" src="img/plus1.png" />
        </button>
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
