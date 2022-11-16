import React, { useState } from 'react';
import hoursDetail from '../data/hours';
import "../styles/HourlyCalendar.css"


const HourlyCalendar = ({userId, data}) => {
  const arr = [];
  hoursDetail.map((times)=>{
    {/* console.log(times.time) */}
    if (data){
      data?.map((obj) => {
            
            //CHECK THE DATA FROM THE OBJECT ********************************
            if (obj.time === times.time){
              let chunk = 
                  <li> 
                    {obj.name}
                  </li>;
              arr.push(<div key={times.time} className={times.time}> {times.time} {chunk}</div>)
            }
          });
    } else {
      arr.push(<div key={times.time} className={times.time}> {times.time} </div>)
    }
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
