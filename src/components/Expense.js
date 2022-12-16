import React, { useState } from "react";

import "../css/Expense.css";
import Card from "./Card";
import ExpenseChart from "./ExpenseChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expense = (props) => {
  const [year, setYear] = useState("2020");

  const selectedYear = (year) => {
    setYear(year);
  };

  const filterYear = props.item.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilter={year} onSeletedYear={selectedYear} />
        <ExpenseChart expenses={filterYear} />
        <ExpenseList items={filterYear} />
      </Card>
    </div>
  );
};

export default Expense;
