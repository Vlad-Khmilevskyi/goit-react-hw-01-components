// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatisticsItem = ({ id, label, percentage }) => {
    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var randomColor = generateRandomColor();

    return (
        <li
            className={css.item}
            style={{ backgroundColor: randomColor }}
            key={id}
        >
            <span className="label">{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    );
};

// StatisticsItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
// };
