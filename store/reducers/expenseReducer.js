import {ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from '../actionTypes/actionType'

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE: 
            return [
                ...state,
                action.expense
            ];
        case EDIT_EXPENSE:
            return state.map(expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        case DELETE_EXPENSE:
            return state.filter(expense => expense.id !== action.id);
        default:
            return state;
    }
}