import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from './getRandomColor';
export const Statistics = props => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{props.title}</h2>

      <ul className={css.stat_list}>
        {props.stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
