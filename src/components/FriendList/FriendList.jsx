import PropType from 'prop-types';

import { FriendsBoard } from './FriendList.styled';
import { FriendItem } from './FriendList.styled';
import { Status } from './FriendList.styled';
import { FriendImage } from './FriendList.styled';
import { FriendName } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsBoard>
      {friends.map(friend => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <FriendItem key={id}>
            <Status isOnline={isOnline}></Status>
            <FriendImage src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendItem>
        );
      })}
    </FriendsBoard>
  );
}

FriendList.propTypes = {
  friends: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      avatar: PropType.string.isRequired,
      name: PropType.string.isRequired,
      isOnline: PropType.bool.isRequired,
    })
  ),
};
