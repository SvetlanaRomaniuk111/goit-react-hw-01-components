import { Statistics } from 'components/Statistics/Statistics';
import { Profile } from 'components/Profile/Profile';
import friends from './components/FriendList/friends.json';
import user from './components/Profile/user.json';
import stats from './components/Statistics/data.json';
import transactions from './components/TransactionHistory/transactions.json';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
// const { username, tag, location, avatar, stats } = user;
const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Profile {...user} /> */}
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
      {/* <Statistics {...stats} /> */}
    </>
  );
};

export default App;
