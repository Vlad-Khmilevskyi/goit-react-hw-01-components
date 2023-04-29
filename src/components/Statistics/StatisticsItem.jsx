// import PropTypes from 'prop-types';

export const StatisticsItem = ({ events }) => {
    // console.log(events);
    return (
        <ul className="stat-list">
            {events.map(event => (
                <li className="item" key={event.id}>
                    <span className="label">{event.label}</span>
                    <span className="percentage">{event.percentage}</span>
                </li>
            ))}
        </ul>
    );
};

// StatisticsItem.propTypes = {
//     events: PropTypes.string.isRequired,
// };
