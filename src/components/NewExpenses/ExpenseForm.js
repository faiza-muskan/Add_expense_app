import React, { useState } from "react";

import "../../css/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const expense = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={title} onChange={titleHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions ">
        <button onClick={props.onCancle}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
