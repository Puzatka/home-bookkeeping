import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import Mainlayout from './layouts/Mainlayout';
import AddIncomeForma from 'components/AddIncomeForma';
import EditIncomeForma from 'components/EditIncomeForma';
import AddExpenseForma from 'components/AddExpenseForma';
import EditExpenseForma from 'components/EditExpenseForma';





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />} >
          <Route index element={<ExpensePage/>} />
            {/* <Route path="income" element={<IncomePage/>} /> */}
            <Route path="expense" element={<ExpensePage/>} />
            {/* <Route path="add_income" element={<AddIncomeForma/>} /> */}
            <Route path="add_expense" element={<AddExpenseForma/>} />
            {/* <Route path="edit_income/:id" element={<EditIncomeForma/>} /> */}
            <Route path="edit_expense/:id" element={<EditExpenseForma/>} />
          </Route>
          <Route  path='/login' element={<LoginPage />}/>
          <Route  path='/register' element={<RegisterPage />}/>
      </Routes>
    </>
  )
  }
export default App;
