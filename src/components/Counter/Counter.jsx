import React from "react";
import styles from "./counter.module.css";

const Counter = () => {
  
  let [count,setCount]=React.useState("1")
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button onClick={()=>setCount(Number(count)+1)} data-cy="task-counter-increment-button">+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button onClick={()=>setCount(Number(count)-1)} data-cy="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
