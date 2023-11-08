import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>Upload stats</h2>
            <ul className={css.statList}>
                
                    {stats.map(stat => (
                        <li className={css.itemStat} key={stat.id}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}</span>
                    </li>))}      
                </ul>
        </section>
    )
}

Statistics.propTypes = { 
    title: PropTypes.string, 
    stats: PropTypes.array,
    
}

