import React from "react";

import "../css/ExpenseItems.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price ">£{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItems;
