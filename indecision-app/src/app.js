import React from "react"
import ReactDOM from "react-dom"
import IndecisionApp from "./components/IndecisionApp"
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const Layout = () => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
)

// stateless functional component
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


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
*/