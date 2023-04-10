import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { editIncome } from 'store/slices/incomeSlice';
import { useParams } from 'react-router-dom'

function EditIncomeForma() {

const id = useParams();
const dispatch = useAppDispatch()
const incomes = useAppSelector((state) => state.incomes);
const editedIncome = incomes.filter((income) => income.id == id)
const {date, name, source, summ, note} = editedIncome[0]

const [upddate, setDate] = useState(date)
const [updname, setName] = useState(name)
const [updsource, setSource] = useState(source)
const [updsumm, setSumm] = useState(summ)
const [updnote, setNote] = useState(note)

const navigate = useNavigate()

const handleUpdate = (e: any) => {
    e.preventDefault();
    console.log(upddate, updname, updsource, updsumm, updnote);
    dispatch(editIncome({id: id, date: upddate, name: updname, source: updsource, summ: updsumm, note: updnote}))
    navigate('/income')
}


  return (
    <>
      <Typography variant="h5">EDIT INCOME</Typography>
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
          value={updsource}
          onChange={e => setSource(e.target.value)}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          name='source'
          label="source"
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

export default EditIncomeForma