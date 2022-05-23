import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({addtodo}) => {
  const [value,setValue]=React.useState("")
 
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={value} placeholder="Add task..." onChange={(e)=>{setValue(e.target.value)}} />
      <button onClick={()=> {addtodo(value) ; setValue("")}} data-cy="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
