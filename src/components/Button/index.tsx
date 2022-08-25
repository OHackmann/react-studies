import style from './Button.module.scss';

export default function Button({ texto, type }: { texto :string, type?: "button" | "submit" | "reset" | undefined }) {
  return (
    <button type={type} className={style.button}>
      {texto}
    </button>
  );
}
