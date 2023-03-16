import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 10px auto;
  background-color: ${props => props.theme.colors.bgColorFirst};
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #02bbd7;
    color: white;
  }
`;
