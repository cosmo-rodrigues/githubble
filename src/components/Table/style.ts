import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #644aff;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  max-width: 60vh;
  padding: 8px;
  text-overflow: ellipsis;
  word-wrap: break-word !important;
`;
