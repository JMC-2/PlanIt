import React, { useState } from 'react';
import '../styles/BackLog.css';
import Modal from './AddTaskModal';

const BackLog = () => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  return (
    <div className='backlog'>
      <h1>Backlog</h1>
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

export default BackLog;
