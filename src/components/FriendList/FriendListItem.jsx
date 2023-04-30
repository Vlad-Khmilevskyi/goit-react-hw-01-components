import css from './FriendList.module.css';
import { UserStatus } from './FriendListStatus';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        <li className={css.item} key={id}>
            <UserStatus isOnline={isOnline} />
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
};
