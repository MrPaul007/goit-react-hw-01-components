import Profile from "./components/Profile/Profile.js";
import user from "./data/userProfile.json";
import Statistics from "./components/Statistics/Statistics";
import statsData from "./data/statistic.json";
import FriendList from "./components/FriendList/FriendList.js";
import friendsData from "./data/friends.json";
import Transactions from "./components/Transactions/Transactions.js";
import transData from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
      />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <FriendList friends={friendsData} />
      <Transactions items={transData} />
    </div>
  );
};
