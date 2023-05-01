import user from './UserProfile/user';
import { Profile } from './UserProfile/Profile';

import datas from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './FriendList/friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from './Transaction/transactions.json';
import { Transaction } from './Transaction/Transaction';

export const App = () => {
    return (
        <>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics datas={datas} title="Upload stats" />
            <FriendList friends={friends} />
            <Transaction transactions={transactions} />
        </>
    );
};
