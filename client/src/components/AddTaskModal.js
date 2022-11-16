import React,{useState} from 'react';
import '../styles/AddTaskModal.css';
import hoursDetail from '../data/hours';

const initialValues = {
  date:'',
  hour: '',
  description: '',
  textValue: '',
  schedule: 'no',
  type: 'personal',
};

const AddTaskModal = (props) => {



  // const [date, setDate] = useState('')
  // const [hour, setHour] = useState('')
  // const [description, setDescription] = useState('')
  // const [textValue, setTextValue] = useState('')
  // const [schedule, setSchedule] = useState('no')
  // const [type, setType] = useState('personal')

  const showModalClassName = props.showAddTaskModal
    ? 'modal display-block'
    : 'modal display-none';
  // function for publishing and
  const arr = [];
  hoursDetail.map((times, index) => {
    
    // console.log('times.time: ', times.time) 
    
    let hour = times.time;
    arr.push(
      <option key={index} className={times.time} name={hour} value={times.time} >
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
    console.log('name: ', name);
    console.log('value: ', value);

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
      type: values.type,
      // inputName: initialValues.textValue,
      // description: initialValues.description,
      // date: initialValues.date,
      // time: initialValues.hour,
      // schedule: initialValues.schedule,
      // type: initialValues.personal,
    };
    try {
      //NEED CORRECT ENDPOINT
      fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();;
      //assume body is an object
      console.log('data from add task', data)
    } catch (error) {
      console.log(error.message);
    }
    
    props.toggleAddTaskModal;
    refreshPage();
  };

  return (
    <div className={showModalClassName}>
      <section className='modal-main'>
        <input type='text' className='name' name='textValue' id='name' placeholder='Task ...' onChange={handleInputChange}></input>
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
        <select id='selectTime' name='hour' onChange={handleInputChange}>
          <option className='BLANK' value={null} >
            
          </option>
          <option className='8AM' value='8:00 AM' >
            8:00 AM
          </option>
          <option className='9AM' value='9:00 AM' >
            9:00 AM
          </option>
          <option className='10AM' value='10:00 AM' >
            10:00 AM
          </option>
          <option className='11AM' value='11:00 AM' >
            11:00 AM
          </option>
          <option className='12PM' value='12:00 PM' >
            12:00 PM
          </option>
          <option className='1PM' value='1:00 PM' >
            1:00 PM
          </option>
          <option className='2PM' value='2:00 PM' >
            2:00 PM
          </option>
          <option className='3PM' value='3:00 PM' >
            3:00 PM
          </option>
          <option className='4PM' value='4:00 PM' >
            4:00 PM
          </option>
          <option className='5PM' value='5:00 PM' >
            5:00 PM
          </option>
          <option className='6PM' value='6:00 PM' >
            6:00 PM
          </option>
          <option className='7PM' value='7:00 PM' >
            7:00 PM
          </option>
          <option className='8PM' value='8:00 PM' >
            8:00 PM
          </option>
          <option className='9PM' value='9:00 PM' >
            9:00 PM
          </option>
          <option className='10PM' value='10:00 PM' >
            10:00 PM
          </option>
          <option className='11PM' value='11:00 PM' >
            11:00 PM
          </option>
          <option className='12AM' value='12:00 AM' >
            12:00 AM
          </option>
          {/* {arr} */}
        </select>
        <form onChange={handleInputChange}>
          <p>Type: </p>

          <input type='radio' className='personal' name='type' value='Personal' ></input>
          <label htmlFor='personal'>Personal</label>
          <input type='radio' className='work' name='type' value='Work' ></input>
          <label htmlFor='work'>Work</label>
          <input type='radio' className='school' name='type' value='School' ></input>
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
