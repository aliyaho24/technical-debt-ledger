import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(description, file, lines, date) {
  return { description, file, lines, date };
}

const rows = [
  createData('framework depreciating 2021 so we should do something about this. Its nice having long messages sometimes', 'app/components/Calendar.jsx', '5', '2-12-2020'),
  createData('ineffecient algorithm for scaling', 'app/controllers/search_box.ex', '102-142', '1-24-2019'),
  createData('global variable hash', 'lib/config.exs', '25', '1-20-2020'),
  createData('double save to database', 'lib/api/v2/submit_controller.ex', '253-257', '12-1-2019'),
  createData('hard coded array', 'app/components/RotatingList.jsx', '11-16', '2-10-2020'),
];

const useStyles = makeStyles({
  table: {
    width: '100%',
    tableLayout: 'fixed',
  },
});

function DebtTable() {
  const classes = useStyles();

  return (
    <TableContainer style={{width: '100%'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>File</StyledTableCell>
            <StyledTableCell>Lines</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell style={{maxWidth: '250px'}}>{row.description}</StyledTableCell>
              <StyledTableCell>{row.file}</StyledTableCell>
              <StyledTableCell>{row.lines}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DebtTable;
