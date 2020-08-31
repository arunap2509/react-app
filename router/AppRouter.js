import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <React.Fragment >
                    <div className="container">
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/create" component={AddExpense} />
                        <Route path="/edit/:id" component={EditExpense} />
                    </div>
                </React.Fragment>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;