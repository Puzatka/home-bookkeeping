import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { addExpense } from 'store/slices/expenseSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

    function AddExpenseForma() {
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [summ, setSumm] = useState('')
    const [note, setNote] = useState('')

    const iexpenses = useAppSelector((state) => state.expenses);
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    
    const handleSubmit = (e: any) => {
      e.preventDefault();
      dispatch(addExpense({id: uuidv4(), date, name, category, summ, note}))
      navigate('/expense')
    }

  return (
    <>
      <Typography variant="h5">ADDING NEW EXPENSE</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
        value={date}
          onChange={e => setDate(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="date"
          name='date'
        //   label="set date"
          variant="outlined"
        />
        <br />
        <TextField
          onChange={e => setName(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='name'
          label="enter name"
          variant="outlined"
        />
        <br />
        <TextField
          onChange={e => setCategory(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='category'
          label="category"
          variant="outlined"
        />
        <br />
        <TextField
          onChange={e => setSumm(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='summ'
          label="summ"
          variant="outlined"
        />
        <br />
        <TextField
          onChange={e => setNote(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='note'
          label="note"
          variant="outlined"
        />
        <br />
        {/* <Button variant="contained" color="primary">
          Add Income
        </Button> */}
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddExpenseForma
