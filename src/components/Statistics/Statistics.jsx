// import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
import { StatisticsItem } from './StatisticsItem';
import data from './data.json';

export const Statistics = () => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <StatisticsItem events={data} />
        </section>
    );
};
