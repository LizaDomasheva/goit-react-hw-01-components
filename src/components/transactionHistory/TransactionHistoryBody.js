import React from 'react';
import PropTypes from 'prop-types';


export const TransactionHistoryBody = ( {type, amount, currency}) => (
    <tbody>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
      </tbody>
);

TransactionHistoryBody.propTypes = { 
         type: PropTypes.string.isRequired,
         amount: PropTypes.string.isRequired,
         currency: PropTypes.string.isRequired,
}
