import React from 'react';
import styles from './transactions.module.css';
import PropTypes from 'prop-types';
import { TransactionHistoryBody } from './TransactionHistoryBody';

export const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    {items.map(item => (
      <TransactionHistoryBody
        key={item.id}
        {...item}
      />
  
    ))}
  </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.object,
    )
}
