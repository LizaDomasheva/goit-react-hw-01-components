import React from 'react';
import { Profile } from './components/profile/Profile';
import user from './components/profile/user.json';
import { Statistics } from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import { FriendList } from './components/friendList/FriendList';
import friends from './components/friendList/friends.json';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';

export const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title={'UPLOAD STATS'} stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);
