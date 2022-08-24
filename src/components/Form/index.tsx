import Button from "../Button";
import style from './Form.module.scss';

export default function Form() {
  return (
    <form className={style.newTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Add a new study
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
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
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button
        texto="Add"
      />
    </form>
  );
}