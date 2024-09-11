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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  Montessori: string,
  Traditional: string,
  
) {
  return { Montessori, Traditional };
}

const rows = [
  createData('Emphasis on cognitive and social development', 'Emphasis on social development'),
  createData('Teacher has unobtrusive role in classroom', 'Teacher is center of classroom as “controller”'),
  createData('Environment and method encourage self-discipline', 'Teacher enforces discipline'),
  createData('Mixed age grouping', 'Same age grouping'),
  createData('Grouping encourages children to teach and help each other', 'Most teaching done by teacher'),
  createData('Mainly individual instruction', 'Same age grouping'),
  createData('Child chooses own work', 'Activities structured for child'),
  createData('Child works as long as he wishes on chosen project', 'Child generally allotted specific time for work'),
  createData('Child discovers own concepts from self-teaching materials', 'Child is guided to concepts by teacher'),
  createData('Child discovers own concepts from self-teaching materials', 'Child is guided to concepts by teacher'),
  createData('Child sets own learning pace', 'Instruction pace usually set by group'),
  createData('Child spots own errors from feedback on material', 'If work is corrected, errors usually pointed out by teacher'),
  createData('Child reinforces learning by repetition and feelings of success', 'Learning is reinforced externally by repetition and rewards'),
  createData('Organized program for learning care of self and environment (polishing shoes, cleaning the sink, etc.)', 'Less emphasis on self-care instruction'),
  createData('Child can work where he chooses (yet not disturb work of others); group work is also encouraged', 'Child usually assigned own chair; encouraged to participate, sit still and listen during group sessions'),

];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ Width: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Montessori Method</StyledTableCell>
            <StyledTableCell align="right">Traditional Method</StyledTableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Montessori}>
              <StyledTableCell component="th" scope="row">
                {row.Montessori}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Traditional}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
