import {createStore, combineReducers} from 'redux';
import ExpenseReducer from './reducers/expenseReducer.js';

export default () => {
    const store = createStore(
        combineReducers({
            expenses : ExpenseReducer
        }),
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};