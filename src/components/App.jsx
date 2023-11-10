import user from '../data/user.json';
import Profile from './Profile/Profile';

import data from '../data/data.json';
import Statistics from './Statistics/Statistics';

import friends from '../data/friends.json';
import FriendsList from './FriendsList/FriendsList';

import transactios from '../data/transactions.json'
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats" stats={data} />
      <FriendsList
        friends={friends} />
      <TransactionHistory transactions={transactios} />
    </div>
  );
};

export default App;