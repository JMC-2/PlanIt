import React from 'react';
import hoursDetail from '../data/hours';
import "../styles/HourlyCalendar.css"

const HourlyCalendar = () => {
  const arr = [];
  hoursDetail.map((times, index)=>{
    {/* console.log(times.time) */}
    arr.push(<div key={index} className={times.time}> {times.time} </div>)
  })

  return (
  <>
    <div className='timedisplay'>
      {arr}
    </div>
  
  </>
  );
};

export default HourlyCalendar;
