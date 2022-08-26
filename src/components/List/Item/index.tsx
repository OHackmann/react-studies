import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (taskSelect: ITask) => void;
}

export default function Item(
  { 
    task, 
    time, 
    selected, 
    done, 
    id, 
    selectTask
   }: Props) {
  return (
    <li 
      className={`${style.item} ${selected ? style.selectedItem : ''}`} 
      onClick={() => selectTask(
        {
          task,
          time,
          selected,
          done,
          id
        }
      )}
    >
      <h3> {task} </h3>
      <span>{time}</span>
    </li>
  )
}