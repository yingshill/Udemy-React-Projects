import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Action generator -> we need to add to each reducer:
//ADD_EXPENSE
const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0 }
    = {}) => ({
        type: "ADD_EXPENSE",
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    })
//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id

})
//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
//SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})
//SORT_BY_DATE

const sortByDate = (date = "") => ({
    type: "SORT_BY_DATE",
    date
})
//SORT_BY_AMOUNT

const sortByAmount = (amount = 0) => ({
    type: "SORT_BY_AMOUNT",
    amount
})
//SET_START_DATE

const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})
//SET_END_DATE

const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})

//expenses reducer 
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense   //this is array spreading operator?...
            ]                   // state.concat(action.expense)
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id)     //what is state here? -> state is the array carrying expense objects )
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,      //the original single expense
                        ...action.updates
                    }

                } else {
                    return expense
                }
            })
        default:
            return state;
    }

}


//filter reducer 

const filterReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endData: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}


/* Get visible expenses */
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >=startDate
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b)=>{
        if (sortBy === "date") {
            return a.createdAt < b.createdAt ? 1: -1;
        } else if (sortBy = "amount") {
            return a.amount < b.amount ? 1 : -1;
        }
    })
}


/* store --> combine reducers */
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

/* dispatch */
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: "rent", amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: "conffee", amount: 500, createdAt:  -1000 }));

store.dispatch(sortByAmount());

/*

store.dispatch(setTextFilter("con"));
store.dispatch(sortByAmount());

store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250))

*/



const demoState = {
    expenses: [{
        id: "paga",
        description: "Jan Rent",
        note: "That was the final paymetn for that address",
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endData: undefined
    }
}


//how to combine multiple reducers? 
