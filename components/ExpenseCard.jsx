import React from 'react';

const ExpenseCard = (props) => (
    <div className="expense-card">
        <h3>{props.expense.description}</h3>
        <div className="expense-info">
            <span className="amt">{props.expense.amount}</span>
            <span>{props.expense.createdAt}</span>
        </div>
        <p>{props.expense.note}</p>
    </div>
);

export default ExpenseCard;