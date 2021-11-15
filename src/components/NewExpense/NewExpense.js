import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {

            ...enteredExpenseData,
            id : Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }


    return (
    <div className="new-expense">
        
        <ExpenseFrom onSaveExpenseData = {saveExpenseDataHandler}></ExpenseFrom>
    </div>
    )    
};

export default NewExpense;