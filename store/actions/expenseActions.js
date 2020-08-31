import {ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from '../actionTypes/actionType';
import {v1 as uuid} from 'uuid';

export const addExpense = (
    {
        description = '',
        amount = 0,
        date = 'Jan 1, 2020',
        note = ''
    } = {}
) => {
    return {
        type: ADD_EXPENSE,
        expense: {
            // @ts-ignore
            id: uuid(),
            description,
            amount,
            date,
            note
        }
    }
}

export const editExpense = (id, updates) => {
    return {
        type: EDIT_EXPENSE,
        id,
        updates
    }
}

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        id
    }
}