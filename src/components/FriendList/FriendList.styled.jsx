import styled from 'styled-components';

export const Friends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  column-gap: 20px;
  background-color: ${props => props.theme.colors.bgColorFirst};
  border-radius: 4px;
  padding: 10px 100px 10px 20px;

  .status {
    height: 10px;
    width: 10px;
    border-radius: 100px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }

  .avatar {
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .name {
    text-align: left;
    font-size: 22px;
    font-weight: 600;
  }
`;
