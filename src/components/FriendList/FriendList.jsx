import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </ul>
    );
};
