import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  function iconsChoose(title) {
    switch (title) {
      case 'Happy Customers':
        return <FaRegThumbsUp size={24} />;
      case 'Registered Members':
        return <MdPeople size={24} />;
      case 'Available Products':
        return <MdOutlineProductionQuantityLimits size={24} />;
      case 'Saved Trees':
        return <GiTreeDoor size={24} />;
    }
  }
  return (
    <>
      {title && <h3 className={style.title}>Main Statistics</h3>}
      <ul className={style.list}>
        {stats.map(({ id, title, total }) => (
          <li className={style.item} key={id}>
            <StatisticsItem
              icon={iconsChoose(title)}
              title={title}
              total={total}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
