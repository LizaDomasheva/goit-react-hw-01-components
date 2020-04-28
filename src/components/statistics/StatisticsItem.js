import React from 'react';
import styles from './statisticItem.module.css';
import PropTypes from 'prop-types';

const generateRandomColor = () => {
  let r = Math.round((Math.random() * 155)); 
  let g = Math.round((Math.random() * 155)); 
  let b = Math.round((Math.random() * 155)); 
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

export const StatisticsItem = ({item: {label, percentage} }) => (
  <li className={styles.item} style={{backgroundColor: generateRandomColor()}}>
    <span className={styles.label}>{label} </span>
    <span className={styles.percentage}>{percentage}%</span>{' '}
  </li>
);

StatisticsItem.propTypes = {
  item: PropTypes.shape ({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })
};

