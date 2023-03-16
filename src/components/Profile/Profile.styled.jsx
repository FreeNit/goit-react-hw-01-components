import styled from 'styled-components';

export const UserCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  margin: 20px auto;
  background-color: ${props => props.theme.colors.bgColorFirst};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-img {
    display: inline-block;
    height: 150px;
    width: 150px;
    border-radius: 1000px;
    margin: 40px 60px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .user-name {
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.theme.colors.mainText};
    margin-bottom: 10px;
  }

  .user-tag {
    font-size: 18px;
    color: ${props => props.theme.colors.secondText};
    margin-bottom: 10px;
  }

  .user-location {
    font-size: 18px;
    color: ${props => props.theme.colors.secondText};
    margin-bottom: 40px;
  }
`;

export const UserStatistics = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StatisticsItem = styled.p`
  flex-basis: calc(100% / 3);
  flex-grow: 1;
  outline: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 20px 40px;

  background-color: ${props => props.theme.colors.bgColorSecond};

  .stat-title {
    font-size: 18px;
    color: ${props => props.theme.colors.secondText};
  }

  .stat-value {
    font-size: 22px;
    font-weight: 700;
    color: ${props => props.theme.colors.mainText};
  }
`;
