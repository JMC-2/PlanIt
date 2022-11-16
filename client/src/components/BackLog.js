import React, { useState } from 'react';
import '../styles/BackLog.css';
import Modal from './AddTaskModal';

const BackLog = ({userId, data}) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  const arr = [];
  // assuming that data is an array of objects
  data?.map((obj) => {
    
    //CHECK THE DATA FROM THE OBJECT ********************************
    if (!obj.date && !obj.time){
      let chunk = 
          <li> 
            {obj.name}
            <button onClick={toggleAddTaskModal}>Update</button>
            <Modal
              showAddTaskModal={showAddTaskModal}
              toggleAddTaskModal={toggleAddTaskModal}
            />
          </li>;
      arr.push(chunk);
    }
  });

  return (
    <div className='backlog'>
      <h1 className='heading'>Backlog :</h1>
      <div className='rightNav'>
        <ul className='ul'>
          {arr}
        </ul>
      </div>
    </div>
  );
};

export default BackLog;
