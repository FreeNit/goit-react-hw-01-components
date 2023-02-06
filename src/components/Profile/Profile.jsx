import PropType from 'prop-types';

import css from 'components/Profile/Profile.module.css';

export default function Profile(userData) {
  const { userName, tag, location, avatar, stats } = userData;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className="name">{userName}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css['stats-item']}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  userName: PropType.string,
  tag: PropType.string,
  location: PropType.string,
  avatar: PropType.string,
  stats: PropType.shape({
    followers: PropType.number,
    views: PropType.number,
    likes: PropType.number,
  }),
};
