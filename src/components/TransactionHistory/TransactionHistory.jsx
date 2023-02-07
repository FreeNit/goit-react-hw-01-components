import PropType from 'prop-types';

import { Table } from './TransactionHistory.styled';
import { TableHeadRow } from './TransactionHistory.styled';
import { TableHead } from './TransactionHistory.styled';
import { TableData } from './TransactionHistory.styled';
import { TableFirstData } from './TransactionHistory.styled';
import { TableBodyRow } from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <Table className="transaction-history">
      <thead>
        <TableHeadRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableHeadRow>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => {
          const { id, type, amount, currency } = transaction;
          return (
            <TableBodyRow key={id} itemIndex={index}>
              <TableFirstData>{type}</TableFirstData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableBodyRow>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropType.arrayOf(
    PropType.shape({
      id: PropType.oneOfType([
        PropType.string.isRequired,
        PropType.number.isRequired,
      ]),
      type: PropType.string.isRequired,
      amount: PropType.string.isRequired,
      currency: PropType.string.isRequired,
    })
  ),
};
