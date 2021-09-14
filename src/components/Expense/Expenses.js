import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpenseChart from "./Expensechart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filtexp= props.data.filter(expens =>{
      return expens.date.getFullYear().toString()=== filteredYear;
  });
  return (
    <div className="expenses">
      <ExpenseChart expenses={filtexp}/>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      { filtexp.length === 0 ? <p className="noexp">No Expenses Found</p> :
      filtexp.map((exp) => (
        <ExpenseItem
          key={exp.id.toString()}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
        ))}
    </div>
  );
}
export default Expenses;
