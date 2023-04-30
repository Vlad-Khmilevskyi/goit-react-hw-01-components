import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const UserStatus = ({ isOnline }) => {
    const getStatusColor = () => {
        return isOnline ? 'green' : 'red';
    };

    const statusColor = getStatusColor();

    const statusStyle = {
        backgroundColor: statusColor,
    };

    return (
        <span className={css.status} style={statusStyle}>
            {isOnline}
        </span>
    );
};

UserStatus.propTypes = {
    isOnline: PropTypes.bool.isRequired,
};
