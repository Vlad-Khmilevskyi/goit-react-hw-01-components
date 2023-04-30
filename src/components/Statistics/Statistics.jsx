// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ datas }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.stat_list}>
                {datas.map(({ id, label, percentage }) => (
                    <StatisticsItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>
    );
};

// Statistics.propTypes = {
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
// };
