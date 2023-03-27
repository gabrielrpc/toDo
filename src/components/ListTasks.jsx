import { Trash } from "phosphor-react";

import styles from "./ListTasks.module.css";

const ListTasks = ({ content, id, completed, onDeleteTask, checkedTask }) => {

  function deleteTask() {
    onDeleteTask(id)
  }

  function checkeds() {
    checkedTask(id, completed)
  }

  return (
    <li  className={styles.itens}>
      <label htmlFor={id}>
        <input onChange={checkeds} className={styles.check} type="checkbox" id={id} checked={completed}/>
        <p onClick={checkeds}>{content}</p>
        <span className={styles.checkMark}></span>
      </label>

      <button onClick={deleteTask} className={styles.trash}>
        <Trash />
      </button>
    </li>
  );
};

export default ListTasks;
