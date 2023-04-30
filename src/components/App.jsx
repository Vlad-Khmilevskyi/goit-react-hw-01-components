import PropTypes from 'prop-types';

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
            <Statistics datas={datas} />
            <FriendList friends={friends} />
            <Transaction transactions={transactions} />
        </>
    );
};

Profile.propTypes = {
    // username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
