import PropType from 'prop-types';

import css from 'components/Statistics/Statistics.module.css';
import generateRandomHEXColor from 'components/utils/generateRandomColor';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css['stat-list']}>
        {stats.map(stat => {
          const { id, label, percentage } = stat;
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: generateRandomHEXColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropType.string,
  stats: PropType.array,
};
