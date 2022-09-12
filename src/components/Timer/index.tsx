import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
  select: ITask | undefined;
}

export default function Timer({ select }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if(select?.time) {
      setTime(timeToSeconds(select.time));
    }
  },[select])
  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      Time: {time}
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button
        texto="Start"
      />
    </div>
  )
}