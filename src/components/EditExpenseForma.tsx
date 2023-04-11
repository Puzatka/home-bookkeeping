import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { editExpense } from 'store/slices/expenseSlice';
import { useParams } from 'react-router-dom'

function EditExpenseForma() {

const id = useParams<{ id: string }>();
const dispatch = useAppDispatch()
const expenses = useAppSelector((state) => state.expenses);
const editedExpense = expenses.filter((expense) => expense.id == id.id)
const {date, name, category, summ, note} = editedExpense.length > 0 ? editedExpense[0] : {date: '', name: '', category: '', summ: '', note: ''}

const [upddate, setDate] = useState(date || '')
const [updname, setName] = useState(name || '')
const [updcategory, setCategory] = useState(category || '')
const [updsumm, setSumm] = useState(summ || '')
const [updnote, setNote] = useState(note || '')

const navigate = useNavigate()

const handleUpdate = (e: any) => {
    e.preventDefault();
    console.log(upddate, updname, updcategory, updsumm, updnote);
    dispatch(editExpense({id: id.id, date: upddate, name: updname, category: updcategory, summ: updsumm, note: updnote}))
    navigate('/expense')
}


  return (
    <>
      <Typography variant="h5">EDIT EXPENSE</Typography>
      <form onSubmit={handleUpdate}>
        <TextField
          value={upddate}
          onChange={e => setDate(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='date'
          label="set date"
          variant="outlined"
        />
        <br />
        <TextField
          value={updname}
          onChange={e => setName(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='name'
          label="enter name"
          variant="outlined"
        />
        <br />
        <TextField
          value={updcategory}
          onChange={e => setCategory(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='category'
          label="category"
          variant="outlined"
        />
        <br />
        <TextField
          value={updsumm}
          onChange={e => setSumm(e.target.value)} 
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='summ'
          label="summ"
          variant="outlined"
        />
        <br />
        <TextField
          value={updnote}
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
        <button>Update</button>
      </form>
    </>
  )
}

export default EditExpenseForma