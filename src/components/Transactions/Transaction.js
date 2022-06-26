import PropTypes from "prop-types";

function Transaction({ type, amount, currency }) {
  return(
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr> 
  )   
}

Transaction.propTypes = {
    type: PropTypes.string,
    currency: PropTypes.string,
    amount: PropTypes.string,
};

export default Transaction;