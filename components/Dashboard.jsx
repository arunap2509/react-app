import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import ExpenseCard from './ExpenseCard';
import {getAllExpense, getTotalExpense} from '../store/selectors/selector';
import {connect} from 'react-redux';

const Dashboard = (props) => {
    return (
        <Fragment>
            <h2>All Your Expenses</h2>
            <h3 className="total">{`Total Expense Rs.${props.total || 0}`}</h3>
            <div className="expense-container">
                {props.expenses && props.expenses.map((expense) => (
                    <Link key={expense.id} to={`/edit/${expense.id}`}>
                        <ExpenseCard expense={expense} />
                    </Link>
                ))}
            </div>
        </Fragment>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: getAllExpense(state.expenses),
        total: getTotalExpense(state.expenses)
    }
}

export default connect(mapStateToProps)(Dashboard);