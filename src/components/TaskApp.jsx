import React from "react";
import Counter from "./Counter/Counter";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import {v4 as uuid4} from 'uuid'
import Tasks from "./Tasks/Tasks";
import data from "../data/tasks.json"


const TaskApp = () => {
  const [todo,settodo]=React.useState([])

  const [data1,setdata]=React.useState(data)
  // const putValue=(value,id)=>setdata([...data1,{
  //   id:uuid4(),
  //   text:value,
  //   done:
  // }])

  const addtodo=(enewtodo)=>{
    return(settodo([...todo,{
      id:uuid4(),
      value:enewtodo
    }]))
  }

  const deleteitem=((value)=>{
    settodo(todo.filter((e)=>e.value!==value))
  })


  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
    <TaskHeader todo={todo} data1={data1}/>
    <AddTask addtodo={addtodo} />
    <Tasks todo={todo} deleteitem={deleteitem} data1={data1} />
    </div>
  );
};

export default TaskApp;
