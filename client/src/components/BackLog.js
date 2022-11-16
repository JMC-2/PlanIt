import React, { useState,useEffect } from 'react';
import '../styles/BackLog.css';
import Modal from './AddTaskModal';

const BackLog = ({userId, data}) => {
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskArrayBackLog, setTaskArrayBackLog] = useState([]);
  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  useEffect(()=>{
  const arr = [];
  // assuming that data is an array of objects
  data.map((obj) => {
    
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
  setTaskArrayBackLog(arr)
},[])

  return (
    <div className='backlog'>
      <h1>Backlog</h1>
      <div className='rightNav'>
        <ul className='ul'>
          {taskArrayBackLog}
        </ul>
      </div>
    </div>
  );
};

export default BackLog;
