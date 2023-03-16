import PropTypes from 'prop-types';
import {
  SectionProfile,
  UserCard,
  UserInfo,
  UserStatistics,
  StatisticsItem,
} from './Profile.styled';

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <SectionProfile>
      <UserCard>
        <UserInfo>
          <img className="user-img" src={avatar} />
          <p className="user-name">{username}</p>
          <p className="user-tag">@{tag}</p>
          <p className="user-location">{location}</p>
        </UserInfo>
        <UserStatistics>
          <StatisticsItem>
            <span className="stat-title">Followers</span>
            <span className="stat-value">{stats.followers}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span className="stat-title">Views</span>
            <span className="stat-value"> {stats.views}</span>
          </StatisticsItem>
          <StatisticsItem>
            <span className="stat-title">Likes</span>
            <span className="stat-value">{stats.likes}</span>
          </StatisticsItem>
        </UserStatistics>
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
