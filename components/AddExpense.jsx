import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../styles/AddExpense.css';
import {connect} from 'react-redux'
import {addExpense} from '../store/actions/expenseActions';


const AddExpense = (props) => {

    const onSubmit = (expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
    };

    return (
        <div className="add-expense">
            <ExpenseForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect()(AddExpense);