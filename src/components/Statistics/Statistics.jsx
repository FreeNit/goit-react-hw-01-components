import { SectionWrapper } from 'components/common/Common.styled';
import {
  StatisticWrapper,
  StatisticsList,
  StatisticTitle,
} from './Statistics.styled';

export const Statistics = ({ statistics }) => {
  return (
    <SectionWrapper>
      <StatisticWrapper>
        <StatisticTitle>Upload stats</StatisticTitle>
        <StatisticsList>
          {statistics.map(({ id, label, percentage }) => {
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
