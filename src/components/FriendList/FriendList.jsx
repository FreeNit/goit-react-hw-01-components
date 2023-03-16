import PropTypes from 'prop-types';

import { SectionWrapper } from 'components/common/Common.styled';
import { Friends, FriendItem } from './FriendList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <SectionWrapper>
      <Friends>
        {friendList.map(
          ({
            id,
            avatar = 'https://www.bangkokfightlab.com/wp-content/uploads/2017/05/noavatar.png',
            name = 'Unknown',
            isOnline,
          }) => {
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
          }
        )}
      </Friends>
    </SectionWrapper>
  );
};

FriendList.prototype = {
  friendList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
