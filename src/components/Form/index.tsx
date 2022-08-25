import { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss';
import { v4 as uuidv4 } from 'uuid'

export default function Form({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<ITask[]>>}) {
  const [task, setTask] = useState({
    task: '',
    time: '00:00:00'
  });

  function addTask(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setTasks(oldTasks =>
      [
        ...oldTasks, 
        { 
          ...task,
          selected: false,
          done: false,
          id: uuidv4() 
        }
      ]
    );
    setTask({
      task: '',
      time: '00:00:00'
  });
}
  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Add a new study
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={task.task}
          onChange={(e) => setTask({ ...task, task: e.target.value })}
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Time
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={task.time}
          onChange={(e) => setTask({ ...task, time: e.target.value })}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button
        type="submit"
        texto="Add"
      />
    </form>
  );
}