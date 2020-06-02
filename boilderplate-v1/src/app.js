import React from "react"
import ReactDOM from "react-dom"

import "normalize.css/normalize.css";
import "./styles/styles.scss";


ReactDOM.render(<p>This is Us</p>, document.getElementById('app'));


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