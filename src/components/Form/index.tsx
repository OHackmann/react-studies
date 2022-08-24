import React from "react";
import Button from "../Button";

function Form() {
  return (
    <form>
      <div>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div>
        <label htmlFor="tempo">
          Tempo
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
      <Button/>
    </form>
  );
}

export default Form;