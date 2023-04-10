import {createSlice} from '@reduxjs/toolkit';

const incomeSlice = createSlice({
name: 'incomes',
    initialState: [{
            id: null,
            date: null,
            name: null,
            source: null,
            summ: null,
            note: null,
    }],
    reducers: {
        addIncome: (state, action) => {
            state.push(action.payload)
        },
        editIncome: (state, action) => {
            const index = state.findIndex((income) => income.id === action.payload.id);
            state[index] = action.payload;
        },
        deleteIncome: (state, action) => {
            return state.filter((income) => income.id !== action.payload.id);
        }
    }
})

export const {addIncome, editIncome, deleteIncome} = incomeSlice.actions;

export default incomeSlice.reducer;