import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const[isEditing,setediting]=useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setediting(false);
      };
  const setedit = () =>{
    setediting(true);
  }
  const stopedit = () =>{
    setediting(false);
  }
  return (
    <div className='new-expense'>
    {!isEditing && <button onClick={setedit} >Add new expense</button>}
    {isEditing && <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} oncancel={stopedit}/>}
    </div>
  );
};
export default NewExpense;