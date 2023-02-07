import PropType from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <li className="item" key={id}>
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
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
