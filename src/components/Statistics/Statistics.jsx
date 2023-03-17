import PropTypes from 'prop-types';

import { SectionWrapper } from 'components/common/Common.styled';

import {
  StatisticWrapper,
  StatisticsList,
  StatisticTitle,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <SectionWrapper>
      <StatisticWrapper>
        {title && <StatisticTitle>{title}</StatisticTitle>}
        <StatisticsList>
          {stats.map(({ id, label, percentage }) => {
            let randomColor =
              '#' + Math.floor(Math.random() * 16777215).toString(16);
            return (
              <li
                key={id}
                className="stat-item"
                style={{ backgroundColor: randomColor }}
              >
                <span className="stat-item__label">{label}</span>
                <span className="stat-item__percentage">{percentage}%</span>
              </li>
            );
          })}
        </StatisticsList>
      </StatisticWrapper>
    </SectionWrapper>
  );
};

Statistics.prototype = {
  stats: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
