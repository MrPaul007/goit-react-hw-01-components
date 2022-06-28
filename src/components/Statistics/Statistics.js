import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import Statistic from "./Statistic.js";

function Statistics({ title, stats }) {
    return (
    <section className={css.statistics}>
        
        {title && (
        <h2 className={css.title}>{title}</h2>
        )}        
        <ul className={css.statList}>
            {stats.map(stat => (  
                <Statistic 
                    key= {stat.id}
                    label = {stat.label}
                    percentage = {stat.percentage}
                />
            ))}    
        </ul>
    </section>
    );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      }),
    ),
  };

export default Statistics;
