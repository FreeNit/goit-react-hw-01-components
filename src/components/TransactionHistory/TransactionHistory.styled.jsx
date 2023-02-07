import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 15px;
  border: 1px solid #dddddd;
  overflow: hidden;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 900px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  vertical-align: middle;
  color: #b7babd;
`;

export const TableHeadRow = styled.tr`
  background-color: #00bcd5;
  color: #ffffff;
`;

export const TableHead = styled.th`
  padding: 12px 15px;
  border: 1px solid #dddddd;
`;

export const TableFirstData = styled.td`
  ::first-letter {
    text-transform: capitalize;
  }
`;

export const TableData = styled.td`
  padding: 12px 15px;
  border: 1px solid #dddddd;
`;

export const TableBodyRow = styled.tr`
  background-color: ${props => props.itemIndex % 2 === 0 && '#ECF1F4'};
  border-bottom: 1px solid #dddddd;
`;
