export const TransactionHistory = ({ items }) => {
    return (
        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    );
};
