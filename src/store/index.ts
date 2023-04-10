import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./slices/userSlice";
import incomeReducer from "./slices/incomeSlice"
import { type } from "os";

export const store = configureStore({
    reducer:{
        user: userReducer,
        incomes: incomeReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

