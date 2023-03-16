import styled from 'styled-components';

export const StatisticWrapper = styled.div`
  background-color: ${props => props.theme.colors.bgColorFirst};
`;

export const StatisticTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.mainText};
  padding: 30px 5px;
  text-align: center;
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;

  .stat-item {
    flex-basis: calc(100% / 5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    color: #fff;

    &__percentage {
      font-size: 30px;
    }
  }
`;
