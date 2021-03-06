import PropTypes from 'prop-types';
import './TransactionHistory.css';

function TransactionHistory({items}) {
    return (
    <div className="TransactionHistory">
    <table className="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;