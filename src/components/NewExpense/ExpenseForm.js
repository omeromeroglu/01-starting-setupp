import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle]= useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const [enteredAmount,setEnteredAmount]= useState("");

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    }
    const [enteredDate,setEnteredDate]= useState("");

    const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);    

    }

    const submitHandler = (event)=> {
        event.preventDefault();

        const enteredData= {

            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(enteredData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="1995-01-01" max="2021-11-14" onChange={dateChangeHandler}></input>
                </div>
            </div>


            <div className="new-expense__actions">

                <button type="submit">Add Expense</button>

            </div>

        </form>


    )
};
    
export default ExpenseForm;