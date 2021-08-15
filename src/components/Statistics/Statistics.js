import PropTypes from 'prop-types';
import './Statistics.css';

function Statictics ({ title, stats }) {
    return (
        <section className="Statistics">
            {title && <h2 className="Statistics__title">{title}</h2>}

            <ul className="stat__list">
                {stats.map(stat => (
                    <li key={stat.id} className="stat__item">
                        <span className="stat__label">{stat.label}</span>
                        <span className="stat__percentage">{stat.percentage}</span>
                    </li>
                ))}                
            </ul>
        </section>
    );
};

Statictics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statictics;