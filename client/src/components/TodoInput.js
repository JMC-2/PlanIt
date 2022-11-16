import React, { useState, useEffect } from 'react';
import Modal from './AddTaskModal';

const TodoInputBox = ({userId, data}) => {

  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskArray, setTaskArray] = useState([]);

  const toggleAddTaskModal = () => {
    setShowAddTaskModal(!showAddTaskModal);
  };

  console.log('data from INPUTBOX',data)

  useEffect(() => {

    console.log('data from INPUTBOX',data)
    
    const arr = [];
    // assuming that data is an array of objects
    data.map((obj) => {
      console.log('data##########',obj.date)
      console.log('time##########',obj.time)
      //CHECK THE DATA FROM THE OBJECT ********************************
      if (obj.date && obj.time){
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
    setTaskArray(arr);

  }, [data])
  
  return (
  <div>
       <div className='rightNav'>
        <ul className='ul'>
          {taskArray}
        </ul>
      </div>
  </div>
  );
};

export default TodoInputBox;
