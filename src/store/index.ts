import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";
import incomeReducer from "./slices/incomeSlice";
import expenseReducer from "./slices/expenseSlice";
import { type } from "os";
import exp from "constants";

export const store = configureStore({
    reducer:{
        user: userReducer,
        incomes: incomeReducer,
        expenses: expenseReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

