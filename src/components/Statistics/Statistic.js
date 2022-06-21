import PropTypes from "prop-types";
import css from './Statistics.module.css'

function Statisic({ id, label, percentage }) {
  const randomColor = () => {
    let random1 = Math.round(Math.random() * 255);
    let random2 = Math.round(Math.random() * 255);
    let random3 = Math.round(Math.random() * 255);
    return `rgb(${random1}, ${random2}, ${random3})`;
  };  
  
  return(
      <li key={id} className={css.item} style={{
        backgroundColor:randomColor(),
      }}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>    
    )   
}

Statisic.defaultProps = {
    percentage: 0,
};
  
Statisic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
};
  
  export default Statisic;