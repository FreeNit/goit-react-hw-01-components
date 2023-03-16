import { SectionWrapper } from 'components/common/Common.styled';
import { Friends, FriendItem } from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <SectionWrapper>
      <Friends>
        {friendList.map(({ id, avatar, name, isOnline }) => {
          return (
            <FriendItem key={id} isOnline={isOnline}>
              <span className="status">{isOnline}</span>
              <img
                className="avatar"
                alt="User avatar"
                width="48"
                src={avatar}
              />
              <p className="name">{name}</p>
            </FriendItem>
          );
        })}
      </Friends>
    </SectionWrapper>
  );
};
