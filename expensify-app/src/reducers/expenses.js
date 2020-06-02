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

export default expensesReducer;