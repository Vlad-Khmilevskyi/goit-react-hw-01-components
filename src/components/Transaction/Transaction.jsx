// import PropTypes from 'prop-types';
import { TransactionHistory } from './TransactionHistory';
import css from './Transaction.module.css';

export const Transaction = ({ transactions }) => {
    return (
        <table className={css.transaction_history}>
            <thead className={css.thead}>
                <tr className={css.thead_tr}>
                    <th>Type</th>
                    <th className={css.thead_th}>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tbody}>
                {transactions.map(({ id, type, amount, currency }) => (
                    <TransactionHistory
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    );
};

// Transaction.propTypes = {
//     // id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired,
// };
