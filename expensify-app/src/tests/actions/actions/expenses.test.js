import { addExpense, editExpense, removeExpense } from "../../actions.expenses"

test("should set up remove expense action object", () => {
    const action = removeExpense({ id: 123 })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123"
    })
})

test("should edit current expense", () => {
    const result = editExpense("123", { note: "New note value" })
    expect(result).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {
            note: "New note value"
        }
    })
})

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "this was last month rent"
    }
    const action = addExpense(expenseDdata)

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test("should setup add expense action object with default values ", () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
})



//toEqual: object and array
//toBe: number, string, boolean 