import userData from 'JSON/user.json';
import statisticsData from 'JSON/data.json';
import friendList from 'JSON/friends.json';
import transactions from 'JSON/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'inline-grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
      }}
    >
      <Profile userData={userData} />
      <Statistics stats={statisticsData} title="Upload stats" />
      <FriendList friendList={friendList} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
