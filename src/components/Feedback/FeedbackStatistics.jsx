import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={s.statistics}>
      <ul className={s.statisticsList}>
        <li className={s.statisticsList__item}>
          <p className={s.statisticsList__text}>Good: {good}</p>
        </li>
        <li className={s.statisticsList__item}>
          <p className={s.statisticsList__text}>Neutral: {neutral}</p>
        </li>

        <li className={s.statisticsList__item}>
          <p className={s.statisticsList__text}>Bad: {bad}</p>
        </li>
        <li className={s.statisticsList__item}>
          <p className={s.statisticsList__text}>Total: {total}</p>
        </li>
        <li className={s.statisticsList__item}>
          <p className={s.statisticsList__text}>
            Positive feedback: {!positivePercentage ? 0 : positivePercentage}%
          </p>
        </li>
      </ul>
    </div>
  );
};

FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default FeedbackStatistics;
