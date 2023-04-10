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





function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />} >
          <Route index element={<IncomePage/>} />
            <Route path="income" element={<IncomePage/>} />
            <Route path="expense" element={<ExpensePage/>} />
            <Route path="add_income" element={<AddIncomeForma/>} />
            <Route path="edit/:id" element={<EditIncomeForma/>} />
          </Route>
          <Route  path='/login' element={<LoginPage />}/>
          <Route  path='/register' element={<RegisterPage />}/>
      </Routes>
    </>
  )
  }
export default App;
