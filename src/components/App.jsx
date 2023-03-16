import { Profile } from './Profile/Profile';
import userData from 'JSON/user.json';

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
      <Profile userData={userData} />
      <Profile userData={userData} />
      <Profile userData={userData} />
    </div>
  );
};
