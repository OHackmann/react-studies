import style from './Clock.module.scss';

export default function Clock() {
  return (
    <>
      <span className={style.numberClock}>0</span>
      <span className={style.numberClock}>0</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.numberClock}>0</span>
      <span className={style.numberClock}>0</span>
    </>
  )
}