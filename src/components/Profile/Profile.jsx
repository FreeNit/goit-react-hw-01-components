import PropTypes from 'prop-types';
import { SectionProfile, UserCard, UserInfo, UserImg } from './Profile.styled';

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <SectionProfile>
      <UserCard>
        <UserInfo>
          <UserImg className="UserImg" src={avatar} />
          <p className="UserName">{username}</p>
          <p className="UserTag">@{tag}</p>
          <p className="UserLocation">{location}</p>
        </UserInfo>
        <div className="UserStatistics">
          <p className="UserFollowers">
            <span>Followers</span>
            <span>{stats.followers}</span>
          </p>
          <p className="UserViews">
            <span>Views</span>
            <span> {stats.views}</span>
          </p>
          <p className="UserLikes">
            <span>Likes</span>
            <span>{stats.likes}</span>
          </p>
        </div>
      </UserCard>
    </SectionProfile>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
