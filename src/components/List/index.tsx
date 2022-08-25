import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/task"

export default function List( { tasks }: { tasks: ITask[]}) {
  return (
    <aside className={style.toDoList}>
      <h2> Studies of the day </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}