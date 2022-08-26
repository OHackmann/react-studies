import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/task"

interface Props {
  tasks: ITask[];
  selectTask: (taskSelect: ITask) => void;
}

export default function List( { tasks, selectTask }: Props) {
  return (
    <aside className={style.toDoList}>
      <h2> Studies of the day </h2>
      <ul>
        {tasks.map((item) => (
          <Item
            selectTask={selectTask}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}