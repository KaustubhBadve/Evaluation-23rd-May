import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({value,deleteitem}) => {
   const [isCompleted,setisCompleted]=React.useState(value.isCompleted)
  return (
    <li data-cy="task" className={styles.task}>
      
      <input type="checkbox"  onChange={(e)=>{
        setisCompleted(e.target.checked)
      }} data-cy="task-checkbox" />


      <div data-cy="task-text" className={isCompleted ? styles.linecross : styles.notcompleted}>{value}</div>


      <Counter/>


      <button onClick={()=>deleteitem(value)}  data-cy="task-remove-button">X</button>
      
    </li>
  );
};

export default Task;
