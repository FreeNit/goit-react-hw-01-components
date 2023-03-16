import PropTypes from 'prop-types';

import { SectionWrapper } from 'components/common/Common.styled';
import { TransactionsTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <SectionWrapper>
      <TransactionsTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id}>
                <td style={{ textTransform: 'capitalize' }}>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </TransactionsTable>
    </SectionWrapper>
  );
};

TransactionHistory.prototype = {
  transactions: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
