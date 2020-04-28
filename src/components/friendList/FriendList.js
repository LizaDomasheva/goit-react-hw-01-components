import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import {FriendListItem} from './FriendListItem'

export const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        {...friend}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.object,
  )
}
