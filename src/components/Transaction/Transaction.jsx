import { TransactionHistory } from './TransactionHistory';
import transactions from './transactions.json';

export const Transaction = () => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <TransactionHistory items={transactions} />
        </table>
    );
};
