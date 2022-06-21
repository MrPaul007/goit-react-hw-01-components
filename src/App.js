import Profile from "./components/Profile/Profile.js";
import userData from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import statsData from "./components/Statistics/data.json";
import FriendList from "./components/FriendList/FriendList.js";
import friendsData from "./components/FriendList/friends.json";
import Transactions from "./components/Transactions/Transactions.js";
import transData from "./components/Transactions/transactions.json";

export default function App() {
  return (
    <div>
      <Profile item={userData} />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <FriendList items={friendsData} />
      <Transactions items={transData} />
    </div>
  );
};
