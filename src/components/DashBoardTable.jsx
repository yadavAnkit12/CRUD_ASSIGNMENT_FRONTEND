import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(taskPriority, pendingTasks, timeLapsed, timeToFinish) {
  return { taskPriority, pendingTasks, timeLapsed, timeToFinish };
}

const rows = [
  { taskPriority: '1', pendingTasks: '3', timeLapsed: '12', timeToFinish: '8' },
  { taskPriority: '2', pendingTasks: '5', timeLapsed: '6', timeToFinish: '3' },
  { taskPriority: '3', pendingTasks: '1', timeLapsed: '8', timeToFinish: '7' },
  { taskPriority: '4', pendingTasks: '0', timeLapsed: '0', timeToFinish: '0' },
  { taskPriority: '5', pendingTasks: '6', timeLapsed: '30', timeToFinish: '6' },
];

export default function DashBoardTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 800 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Task Priority</StyledTableCell>
            <StyledTableCell align="right">Pending Tasks</StyledTableCell>
            <StyledTableCell align="right">Time Lapsed (hrs)</StyledTableCell>
            <StyledTableCell align="right">Time to Finish (hrs)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.taskPriority}
              </StyledTableCell>
              <StyledTableCell align="right">{row.pendingTasks}</StyledTableCell>
              <StyledTableCell align="right">{row.timeLapsed}</StyledTableCell>
              <StyledTableCell align="right">{row.timeToFinish}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
