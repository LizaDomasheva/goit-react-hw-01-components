import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline = false }) => (
    <li className={styles.item}>
      <span className={isOnline ? styles.statusOnline : styles.statusOfline}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );

  FriendListItem.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id: PropTypes.number.isRequired,
  };