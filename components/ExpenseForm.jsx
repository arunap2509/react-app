import React, { Component } from 'react';
import '../styles/ExpenseForm.css';

class ExpenseForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            description : props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            date: props.expense ? props.expense.date : '',
            note: props.expense ? props.expense.note : '',
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (e) => {
        const date = e.target.value;
        this.setState({date});
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({note});
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            alert("Description and amount cannot be empty");
        } else {
            const expense = {
                description: this.state.description,
                amount: this.state.amount,
                date: this.state.date,
                note: this.state.note,
            };
            this.props.onSubmit(expense);
        }
    };
    
    render () {
        return (
            <div className="expense-form">
                <form onSubmit={this.onFormSubmit}>
                    <h2>{this.props.expense ? this.props.expense.description : 'Add Expense'}</h2>
                    <div className="form-group">
                        <div className="form-control">
                            <input 
                            onChange={this.onDescriptionChange} 
                            type="text" 
                            value={this.state.description}
                            placeholder="Description"/>
                        </div>
                        <div className="form-control">
                            <input onChange={this.onAmountChange} 
                            type="text" 
                            value={this.state.amount}
                            placeholder="Amount"/>
                        </div>
                        <div className="form-control">
                            <input onChange={this.onDateChange} 
                            type="text" 
                            value = {this.state.date}
                            placeholder="Enter date"/>
                        </div>
                        <div className="form-control">
                            <input onChange={this.onNoteChange} 
                            type="text" 
                            value={this.state.note}
                            placeholder="Notes"/>
                        </div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );    
    };
}

export default ExpenseForm;