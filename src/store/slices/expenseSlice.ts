import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// import  db  from "../../firebase"
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const expenseDB = db.collection('expenses');

interface ExpenseData {
    id: any;
    date: string;
    name: string;
    category: string;
    summ: number | string ;
    note: string
  }

const expenseSlice = createSlice({
name: 'expenses',
    initialState: [] as ExpenseData[],
    reducers: {
        addExpense: (state, action: PayloadAction<ExpenseData>) => {
            state.push(action.payload);
            // expenseDB.add(action.payload).then(() => {
            //     console.log("Added document successfully!");
            // }).catch((error: any) => {
            //     console.error("Error adding document: ", error);
            //   });
        },
        editExpense: (state, action: PayloadAction<ExpenseData>) => {
            const index = state.findIndex((expense) => expense.id === action.payload.id);
            state[index] = action.payload;
            // expenseDB.doc(action.payload.id).update(action.payload).then(() => {
            //     console.log('Document successfully updated!');
            // }).catch((error: any) => {
            //     console.error('Error updating document: ', error);
            // });
        },
        deleteExpense: (state, action: PayloadAction<{ id: string }>) => {
            const index = state.findIndex((expense) => expense.id === action.payload.id);
            state.splice(index, 1);
            // expenseDB.doc(action.payload.id).delete().then(() => {
            //     console.log('Document successfully deleted!');  
            // });  
        },
    },
});

export const {addExpense, editExpense, deleteExpense} = expenseSlice.actions;

export default expenseSlice.reducer;