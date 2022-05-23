import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todo,data1}) => {
  let [totalTask,settotalTask] =React.useState(todo.length+data1.length);
  let [unCompletedTask,setunCompletedTask] = React.useState("0");

  return (
    <div className={styles.header}>
      TODO List    
      <div data-cy="task-header" className={styles.taskHeader}>
      You have <span>   </span>
      <b data-cy="header-remaining-task">{unCompletedTask}</b>   
         <span>  </span>  of <span>   </span>
      <b data-cy="header-total-task">{totalTask}</b>
      <span>   </span>  tasks remaining
    </div>
    </div>

  );
};

export default TaskHeader;
