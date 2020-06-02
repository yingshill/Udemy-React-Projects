import {createStore} from "redux"


//action generator
const incrementCount = ({ incrementBy = 1 } = {} ) => ({
    type: "INCREMENT",
    incrementBy
})


const decrementCount = ({ decrementBy = 10 } = {}) => ({    // ?
    type: "DECREMENT",
    decrementBy
})

const resetCount = () => ({
    type: "RESET",
    count: 0
})

const setCount = ({ count }) => ({
    type: "SET",
    count
})

//reducer
/* 1. reducers are pure functions: dont take any variables from outside scope
   2. never change state or action, never mutate

*/


const store = createStore((state = {count: 0}, action)=>{

    switch (action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.incrementBy
            };
        case "DECREMENT":
            return {
                count: state.count - action.decrementBy
            };
        case "RESET": 
            return {
                count: 0
            };
        case "SESET":
            return {
                count: action.count
            }
        default: 
        return state;
    }
})    //need to take a function as an argument


const unsubscribe = store.subscribe(()=> {              //triggered every time when state changes, it returns a function that unsubscribes the change listener
    console.log(store.getState())  // Allows access to state via getState();
})

store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(resetCount())

store.dispatch(setCount({count: 101}))