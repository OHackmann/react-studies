import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";
import { timeToSeconds } from "../../common/utils/time";

export default function Timer() {
  console.log('conversion: ', timeToSeconds('01:01:01'));
  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button
        texto="Start"
      />
    </div>
  )
}