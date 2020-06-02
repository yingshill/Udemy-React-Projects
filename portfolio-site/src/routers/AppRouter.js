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
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import PortfolioItemPage from "../components/PortfolioItemPage";
import PortfolioPage from "../components/PortfolioPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;

