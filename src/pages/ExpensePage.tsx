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
import { deleteExpense } from 'store/slices/expenseSlice';

let date = CurrentDate();

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Expenses() {
  const expenses = useAppSelector((state) => state.expenses);
  const dispatch = useAppDispatch()

  const handleDelete = (id: string) => {
    dispatch(deleteExpense({id: id}))
  }

  return (
    <React.Fragment>
      <Stack direction="row" spacing={20}>
        <NavLink to='/add_expense'>
          <Button variant="outlined" startIcon={<AddCircleIcon />}>
            Add New
          </Button>
        </NavLink>
        <Title>Expenses</Title>
      </Stack>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Category</b></TableCell>
            <TableCell><b>Summ</b></TableCell>
            <TableCell><b>Notes</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense, index) => (
            <TableRow key={index}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.name}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell>{expense.summ}</TableCell>
              <TableCell>{expense.note}</TableCell>
              <TableCell>
                <NavLink to={`/edit_expense/${expense.id}`}>
                  <IconButton color="primary" aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </NavLink>
                  <IconButton onClick={() => handleDelete(expense.id as unknown as string)} aria-label="delete">
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