import styled from 'styled-components';

export const SectionProfile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 4px;
  width: 60%;
  height: 80%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserImg = styled.img`
  display: inline-block;
  height: 150px;
  width: 150px;
  border-radius: 1000px;
  margin: 30px 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
