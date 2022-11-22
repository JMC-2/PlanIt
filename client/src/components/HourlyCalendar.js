import React, { useState, useEffect } from 'react';
import hoursDetail from '../data/hours';
import "../styles/HourlyCalendar.css"


const HourlyCalendar = ({userId, data}) => {

  const [taskArray1, setTaskArray1] = useState([]);

  useEffect(()=> {
  const arr = [];
  hoursDetail.map((times)=>{
    {/* console.log(times.time) */}
    // if (data){
    //   data.map((obj) => {
            
    //         //CHECK THE DATA FROM THE OBJECT ********************************
    //         if (obj.time === times.time){
    //           let chunk = 
    //               <li> 
    //                 {obj.name}
    //               </li>;
    //           arr.push(<div key={times.time} className={times.time}> {times.time} {chunk}</div>)
    //         }
    //       });
    // } else {
      arr.push(<div key={times.time} className="time"> {times.time} </div>)
    // }
  })
  setTaskArray1(arr);
}, []);

  return (
  <>
    <div className='timedisplay'>
      <h1 className='timeheading'>Time :</h1>
      <div>{taskArray1}</div>
    </div>
  
  </>
  );
};

export default HourlyCalendar;
