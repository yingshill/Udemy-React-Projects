/*

What AppRouter Needs? 
-> We need import: the very top code line

When we create new component for React: 
1. import what you need: React.....
2. set up default, and export 
3. in app.js, import this file

Query strings and url parameters:
path="/edit/:id"

*/
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpense from "../components/AddExpense";
import EditExpensePage from "../components/EditExpensePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;

