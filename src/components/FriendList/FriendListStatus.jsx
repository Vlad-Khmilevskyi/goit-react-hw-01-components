import css from './FriendList.module.css';

export const UserStatus = ({ isOnline }) => {
    const getStatusColor = () => {
        return isOnline ? 'green' : 'red';
    };

    const statusColor = getStatusColor();

    return (
        <span className={css.status} style={{ color: statusColor }}>
            {isOnline}
        </span>
    );
};
