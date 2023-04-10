import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { addIncome } from 'store/slices/incomeSlice';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

    function AddIncomeForma() {
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [source, setSource] = useState('')
    const [summ, setSumm] = useState('')
    const [note, setNote] = useState('')

    const incomes = useAppSelector((state) => state.incomes);
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    
    const handleSubmit = (e: any) => {
      e.preventDefault();
      dispatch(addIncome({id: uuidv4(), date, name, source, summ, note}))
      navigate('/income')
    }

  return (
    <>
      <Typography variant="h5">ADDING NEW INCOME</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={e => setDate(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='date'
          label="set date"
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
          onChange={e => setSource(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='source'
          label="source"
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

export default AddIncomeForma

