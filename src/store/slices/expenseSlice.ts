import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface ExpenseData {
    id: any;
    date: string;
    name: string;
    category: string;
    summ: number | string;
    note: string
  }

const expenseSlice = createSlice({
name: 'expenses',
    initialState: [] as ExpenseData[],
    //     {
    //         id: null,
    //         date: null,
    //         name: null,
    //         category: null,
    //         summ: null,
    //         note: null,
    // }

    reducers: {
        addExpense: (state, action: PayloadAction<ExpenseData>) => {
            state.push(action.payload)
        },
        editExpense: (state, action: PayloadAction<ExpenseData>) => {
            const index = state.findIndex((expense) => expense.id === action.payload.id);
            state[index] = action.payload;
        },
        deleteExpense: (state, action: PayloadAction<{ id: any }>) => {
            const index = state.findIndex((expense) => expense.id === action.payload.id);
            state.splice(index, 1);
            }  
        }
})

export const {addExpense, editExpense, deleteExpense} = expenseSlice.actions;

export default expenseSlice.reducer;