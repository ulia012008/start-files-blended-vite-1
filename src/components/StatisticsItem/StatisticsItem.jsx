import style from './StatisticsItem.module.css';

export function StatisticsItem({ title, total, icon }) {
  return (
    <>
      {icon}
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
}

export default StatisticsItem;
