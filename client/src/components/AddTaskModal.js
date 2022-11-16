import React from 'react';
import '../styles/AddTaskModal.css';
import hoursDetail from '../data/hours';

const AddTaskModal = (props) => {
  const showModalClassName = props.showAddTaskModal
    ? 'modal display-block'
    : 'modal display-none';
  // function for publishing and
  const arr = [];
  hoursDetail.map((times, index) => {
    {
      /* console.log(times.time) */
    }
    arr.push(
      <option key={index} className={times.time} value={times.time}>
        {' '}
        {times.time}{' '}
      </option>
    );
  });

  return (
    <div className={showModalClassName}>
      <section className='modal-main'>
        <input type='text' className='task' placeholder='Task ...'></input>
        <form>
          <p>Schedule now?: </p>

          <input type='radio' className='yes'></input>
          <label for='yes'>Yes</label>
          <input type='radio' className='no'></input>
          <label for='no'>No</label>
        </form>
        <div className='schedule'>
          Date:
          <input type='date' id='date' name='date'></input>
        </div>
        <label for='time'>Choose a time: </label>
        <select id='selectTime' name='selectTime'>
          {arr}
        </select>
        <form>
          <p>Type: </p>

          <input type='radio' className='social'></input>
          <label for='social'>Social</label>
          <input type='radio' className='work'></input>
          <label for='work'>Work</label>
          <input type='radio' className='school'></input>
          <label for='school'>School</label>
        </form>

        <input type='text' className='description' placeholder='Description ...'></input>

        <button className='close' onClick={props.toggleAddTaskModal}> Close </button>
        <button className='add'> Add </button>
      </section>
    </div>
  );
};

export default AddTaskModal;
