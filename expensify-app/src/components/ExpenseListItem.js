import React from "react"
import { removeExpense } from "../actions/expenses"
import { connect } from "react-redux"

// define what every single item look like

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
        <h3>${description}</h3>
        <h4>${amount}-${createdAt}</h4>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)


export default connect()(ExpenseListItem)