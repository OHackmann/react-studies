import style from './Button.module.scss';

export default function Button({ texto }: { texto :string}) {
  return (
    <button className={style.button}>
      {texto}
    </button>
  );
}
