import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses"
import ExpenseListItem from "./components/ExpenseListItem"
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore()
console.log(store.getState())


store.dispatch(addExpense({ description: "water bill", amount: 4500 }))
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }))
store.dispatch(addExpense({ description: "rent", amount: 109000 }))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (                // jsx variable 
    <Provider store={store}>
        <AppRouter />
    </Provider>

)
ReactDOM.render(jsx, document.getElementById('app'));
/*
class OldSyntax {
    constructor() {
        this.name = "MIke"
    }
    getGreeting() {
        return `Hi My name is ${this.name} .`
    }
}

const oldSyntax = new OldSyntax()
const getGreeting = oldSyntax.getGreeting()
console.log(getGreeting)

// ------------


//const newSyntax = new NewSyntax()
//const newGetGreeting = newSyntax.getGreeting;
//console.log(newGetGreeting)




// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };




/*
stateless functional class: FAST
 - dont need to manage lifecycle
 - don't need to update states, there is no infrastruture which speeds them up

---local storage and loading option data----
  * only available for string data. number will be converted and storaged as a string

----react router-----
1. under <BrowserRouter> there should be only child, so we need to wrap up with a <div> to add more <Route>
2. exact prop: true -> exact match the path
3. <Swith>tag wraps all Routes from the top, if it finda match, it'll stop, everytime from top to button

how to link between pages?
1. <a> tag will cause the whole page to refresh, so we import "Link".
   <a href="/">Go Home</a>               <Link to="/">Go Home</Link>
   -> Here we use client side routing, not server side routing

2. How to link a Header page to every page?

*/