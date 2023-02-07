import PropType from 'prop-types';

import { FriendsBoard } from './FriendList.styled';
import { FriendItem } from './FriendList.styled';
import { Status } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsBoard>
      {friends.map(friend => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <FriendItem className="item" key={id}>
            <Status isOnline={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
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
