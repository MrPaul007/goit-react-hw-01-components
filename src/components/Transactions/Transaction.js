import PropTypes from "prop-types";
import css from "./Transactions.module.css";

function Transaction({ id, type, amount, currency }) {
  return(
    <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr> 
  )   
}

Transaction.defaultProps = {
    type: "type",
    amount: 0,
    currency: "curency",
};
Transaction.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.number,
};

export default Transaction;