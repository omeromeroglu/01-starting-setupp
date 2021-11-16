import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import { useState } from "react";
function Expenses(props) {

    const [filteredYear,setFilteredYear] = useState("");

    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeFilter ={filterChangeHandler} />
                <ExpenseItem
                    title={props.title[0].title}
                    amount={props.title[0].amount}
                    date={props.title[0].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.title[1].title}
                    amount={props.title[1].amount}
                    date={props.title[1].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.title[2].title}
                    amount={props.title[2].amount}
                    date={props.title[2].date}>
                </ExpenseItem>
                <ExpenseItem
                    title={props.title[3].title}
                    amount={props.title[3].amount}
                    date={props.title[3].date}>
                </ExpenseItem>
            </Card>
        </div>
    )
}

export default Expenses;