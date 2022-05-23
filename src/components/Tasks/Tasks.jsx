import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = ({todo,deleteitem,data1}) => {
  return (
    <>
    <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {
        data1.map((elem)=>(
          <Task key={elem.id} value={elem.text} deleteitem={deleteitem}/>
        ))
        }
      </div>


      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}{
           todo.map((elem)=>(
             <Task key={elem.id} value={elem.value} deleteitem={deleteitem}/>
           ))
        }
      </ul>
      
    </>
  );
};

export default Tasks;
