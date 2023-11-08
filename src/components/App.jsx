import user from './Profile/user.json';
import Profile from './Profile/Profile';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';

import friends from './FriendsList/friends.json';
import FriendsList from './FriendsList/FriendsList';

import transactios from './TransactionHistory/transactions.json'
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