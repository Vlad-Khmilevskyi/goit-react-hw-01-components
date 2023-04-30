import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ type, amount, currency }) => {
    return (
        <tr className={css.transaction_tr}>
            <td className={css.transaction_td}>{type}</td>
            <td className={css.transaction_td}>{amount}</td>
            <td className={css.transaction_td}>{currency}</td>
        </tr>
    );
};

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
