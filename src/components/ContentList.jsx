import React, { useState } from "react";
import styles from "./ContentList.module.css";
import empty from ".././imgs/Empty.svg";
import ListTasks from "./ListTasks";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

const ContentList = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleNewTaskChange() {
    const contentTask = window.event.target.value;
    setNewTask(contentTask);
  }

  function hanleCreateNewTask() {
    const newTaskObj = {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    };
    window.event.preventDefault();
    setTask([...task, newTaskObj]);
    setNewTask("");
  }

  function handleDeleteTask(idToDelete) {
    const taskWithoutDeleteOne = task.filter((tasks) => {
      return tasks.id !== idToDelete;
    });
    setTask(taskWithoutDeleteOne);
  }

  const toggleChecked = (id, isCompleted) => {
    const index = task.findIndex((tasks) => tasks.id === id);
    const newList = task;
    newList[index].isCompleted = !isCompleted;
    setTask([...newList]);
  };

  const completed = task.filter((tasks) => tasks.isCompleted === true);

  const isEmptyTask = task.length === 0;

  return (
    <>
      <form onSubmit={hanleCreateNewTask} className={styles.inputTask}>
        <input
          className={styles.textInput}
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTask}
        />
        <button
          disabled={newTask.length === 0}
          type="submit"
          className={styles.create}
        >
          Criar <PlusCircle />
        </button>
      </form>

      <section className={styles.content}>
        <div className={styles.countTasks}>
          <strong className={styles.amount}>
            Tarefas criadas <span>{task.length}</span>
          </strong>
          <strong className={styles.remaining}>
            Concluídas
            <span>{completed.length}</span>
          </strong>
        </div>

        {isEmptyTask ? (
          <div className={styles.taskEmpyt}>
            <img className={styles.taskEmpytImg} src={empty} />

            <p className={styles.taskEmpytText}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <ul className={styles.list}>
            {task.map((tasks) => {
              return (
                <ListTasks
                  key={uuidv4()}
                  id={tasks.id}
                  content={tasks.content}
                  completed={tasks.isCompleted}
                  checkedTask={toggleChecked}
                  onDeleteTask={handleDeleteTask}
                />
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};

export default ContentList;
