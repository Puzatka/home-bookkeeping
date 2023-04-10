import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from 'components/Title';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { CurrentDate } from 'helpers/helper';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { deleteIncome } from 'store/slices/incomeSlice';

let date = CurrentDate();

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Incomes() {
  const incomes = useAppSelector((state) => state.incomes);
  const dispatch = useAppDispatch()

  const handleDelete = (id: string) => {
    dispatch(deleteIncome(id))
  }

  return (
    <React.Fragment>
      <Stack direction="row" spacing={20}>
        <NavLink to='/add_income'>
          <Button variant="outlined" startIcon={<AddCircleIcon />}>
            Add New
          </Button>
        </NavLink>
        <Title>Incomes</Title>
      </Stack>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Source</b></TableCell>
            <TableCell><b>Summ</b></TableCell>
            <TableCell><b>Notes</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incomes.map((income, index) => (
            <TableRow key={index}>
              <TableCell>{income.date}</TableCell>
              <TableCell>{income.name}</TableCell>
              <TableCell>{income.source}</TableCell>
              <TableCell>{income.summ}</TableCell>
              <TableCell>{income.note}</TableCell>
              <TableCell>
                <NavLink to={`/edit/${income.id}`}>
                  <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </NavLink>
                  <IconButton onClick={() => handleDelete(income.id)} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}