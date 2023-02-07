import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // flexDirection: 'column',
        // alignItems: 'center',
        /////
        display: 'grid',
        // gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyItems: 'center',
        gridGap: 150,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <div>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
