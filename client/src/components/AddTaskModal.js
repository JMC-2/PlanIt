import React,{useState} from 'react';
import '../styles/AddTaskModal.css';
import hoursDetail from '../data/hours';

const initialValues = {
  date:'',
  hour: '',
  description: '',
  textValue: '',
  schedule: 'no',
  type: 'social',
};

const AddTaskModal = (props) => {



  // const [date, setDate] = useState('')
  // const [hour, setHour] = useState('')
  // const [description, setDescription] = useState('')
  // const [textValue, setTextValue] = useState('')
  // const [schedule, setSchedule] = useState('no')
  // const [type, setType] = useState('social')

  const showModalClassName = props.showAddTaskModal
    ? 'modal display-block'
    : 'modal display-none';
  // function for publishing and
  const arr = [];
  hoursDetail.map((times, index) => {
    {
      /* console.log(times.time) */
    }
    let hour = times.time;
    arr.push(
      <option key={index} className={times.time} name={hour} value={times.time}>
        {' '}
        {times.time}{' '}
      </option>
    );
  });

  // refresh the page
  function refreshPage() {
    window.location.reload(false);
  }

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  
  const createToDoList = async (e) => {
    e.preventDefault();
    const body = {
      userId: props.userId,
      inputName: values.textValue,
      description: values.description,
      date: values.date,
      time: values.hour,
      schedule: values.schedule,
      type: values.social,
      // inputName: initialValues.textValue,
      // description: initialValues.description,
      // date: initialValues.date,
      // time: initialValues.hour,
      // schedule: initialValues.schedule,
      // type: initialValues.social,
    };
    try {
      //NEED CORRECT ENDPOINT
      const res = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      //assume body is an object
      console.log('data from Add Task', data)

    } catch (error) {
      console.log(error.message);
    }
    
    props.toggleAddTaskModal;
    // refreshPage();
  };

  return (
    <div className={showModalClassName}>
      <section className='modal-main'>
        <input type='text' className='name' name='name' id='name' placeholder='Task ...' onChange={handleInputChange}></input>
        <form>
          <p>Schedule now?: </p>

          <input type='radio' className='yes' name='yesNo' value='yes' onChange={handleInputChange}></input>
          <label htmlFor='yes'>Yes</label>
          <input type='radio' className='no' name='yesNo' value='no' onChange={handleInputChange}></input>
          <label htmlFor='no'>No</label>
        </form>
        <div className='schedule'>
          Date:
          <input type='date' id='date' name='date' onChange={handleInputChange}></input>
        </div>

        <label htmlFor='time'>Choose a time: </label>
        <select id='selectTime' name='selectTime' onChange={handleInputChange}>
          {arr}
        </select>
        <form>
          <p>Type: </p>

          <input type='radio' className='social' name='type' value='social' onChange={handleInputChange}></input>
          <label htmlFor='social'>Social</label>
          <input type='radio' className='work' name='type' value='work' onChange={handleInputChange}></input>
          <label htmlFor='work'>Work</label>
          <input type='radio' className='school'name='type' value='school' onChange={handleInputChange}></input>
          <label htmlFor='school'>School</label>
        </form>

        <input type='text' className='description' name='description' id='description' placeholder='Description ...' onChange={handleInputChange}></input>

        <button className='close' onClick={props.toggleAddTaskModal}> Close </button>
        <button className='add' onClick={createToDoList} > Add </button>
      </section>
    </div>
  );
};

export default AddTaskModal;
