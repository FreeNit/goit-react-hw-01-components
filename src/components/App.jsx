import userData from 'JSON/user.json';
import statisticsData from 'JSON/data.json';
import friendList from 'JSON/friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'inline-grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gridGap: '20px',
      }}
    >
      <Profile userData={userData} />
      <Statistics statistics={statisticsData} />
      <FriendList friendList={friendList} />
    </div>
  );
};
