import PropTypes from 'prop-types';
import Transaction from './Transaction.js';
import css from "./Transactions.module.css";

function Transactions({ items }) {
    return (
        <table className={css.transactionHistory}>
          <thead>
            <tr>
              <th className={css.typeClass}>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => (  
                <Transaction 
                currency = {item.currency}
                 amount = {item.amount}
                 type = {item.type}
                 key = {item.id}
                />
            ))} 
          </tbody>
        </table>
    );
}

Transactions.defaultProps = {
  items: []
};


Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      }),
    ),
  };

export default Transactions;