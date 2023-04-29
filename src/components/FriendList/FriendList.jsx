import friends from './friends.json';
import { FriendListItem } from './FriendListItem';

export const FriendList = () => {
    return <FriendListItem friends={friends} />;
};
