import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img src={avatar} alt="User avatar" className={css.avatar} />
                <p className={css.name}>{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={css.stats}>
                <li className={css.stats_flex}>
                    <span className="label">Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.stats_flex}>
                    <span className="label">Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.stats_flex}>
                    <span className="label">Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
