import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById('app'));


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