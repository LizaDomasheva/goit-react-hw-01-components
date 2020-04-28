import React from 'react';
import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title.length > 0 && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(item => (
          <StatisticsItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};


