import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/task';
import style from './App.module.scss';

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [select, setSelect] = useState<ITask>();

  function selectTask(taskSelect: ITask) {
    setSelect(taskSelect);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === taskSelect.id ? true : false
    })));
  }
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
      tasks={tasks}
      selectTask={selectTask}
      />
      <Timer select={select}/>
    </div>
  );
}


