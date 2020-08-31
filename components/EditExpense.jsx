import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../styles/EditExpense.css';
import {connect} from 'react-redux';
import {editExpense, deleteExpense } from '../store/actions/expenseActions';

const EditExpense = (props) => {

    const onSubmit = (expense) => {
        props.dispatch(editExpense(props.match.params.id, expense));
        props.history.push("/");
    }

    const onDelete = () => {
        props.dispatch(deleteExpense(props.match.params.id));
        props.history.push("/");
    }

    return (
        <div className="edit-expense">
            <ExpenseForm expense={props.expense} onSubmit={onSubmit}/>
            <button className="delete-exp" onClick={onDelete}>{`Delete ${props.expense.description} Expense`}</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    
    return {
        expense: state.expenses.find((expense) =>  expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpense);