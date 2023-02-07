import styled from '@emotion/styled';

export const FriendsBoard = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
`;

export const FriendItem = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Status = styled.span`
  display: inline-block;
  height: 15px;
  width: 15px;
  background-color: ${props => (props.isOnline ? '#4FAE50' : '#FF4E4E')};
  border-radius: 50%;
`;

export const FriendImage = styled.img`
  margin-left: 10px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const FriendName = styled.p`
  margin-left: 5px;
  font-size: 22px;
  font-weight: 600;
`;
