import React, { useState } from "react";

import "../../css/NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHAndler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onSaveData(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const stopFormHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add Expenses</button>}
      {showForm && (
        <ExpenseForm
          onCancle={stopFormHandler}
          onSaveExpenseData={saveExpenseDataHAndler}
        />
      )}
    </div>
  );
};

export default NewExpense;
