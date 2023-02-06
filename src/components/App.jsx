import user from 'user.json';
import data from 'data.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // flexDirection: 'column',
        // alignItems: 'center',
        /////
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        alignItems: 'center',
        justifyItems: 'center',
        gridGap: 5,
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
    </div>
  );
};
