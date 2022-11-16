import React from "react";
import "../styles/AddTaskModal.css"


const AddTaskModal = (props) => {
  
  const showModalClassName = props.showAddTaskModal ? "modal display-block" : "modal display-none";

    return (
      <div className={showModalClassName}>
        {/* <input>Insert Task ...</input> */}
        Schedule
        Date
        time
        Type
        Description
        <button onClick={props.toggleAddTaskModal}>close</button>
      </div>
    )
}

export default AddTaskModal;