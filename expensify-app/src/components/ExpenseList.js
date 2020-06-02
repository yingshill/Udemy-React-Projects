import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => (
    <div>
        <h1>Expense List </h1>
    
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)


const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)  


//inside of connect() it's a function telling what info from store we want to access
//then ExpenseList would access to those props
