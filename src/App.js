
import NewExpense from './components/NewExpense/NewExpense';
import {  useEffect, useState } from 'react';
import Expenses from './components/Expenses/ExpenseComp/Expenses';
import Card from './components/UI/Card';
import   './App.css';


//let DUMMY_EXPENSE = [];

const App = (props) => {
    const [expenses, setExpenses] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const expenses=localStorage.getItem('expenses');
        if(expenses){
            const expensesitem=JSON.parse(expenses)
            setExpenses(expensesitem);
        }
        const total=localStorage.getItem('total');
        if(total){
            const totalitem=JSON.parse(total)
            setTotal(totalitem);
        }
        
    },[])

    useEffect(()=>{
        const expensesitem=JSON.stringify(expenses)
        localStorage.setItem('expenses',expensesitem)

        const totalitem=JSON.stringify(total)
        localStorage.setItem('total',totalitem)


    },[expenses,total])
    
    const addExpenseHandler = (expense) => {
        const updateExpense = [expense, ...expenses]
        const totals = parseInt(total) + parseInt(expense.amount)
        setTotal(totals);
        setExpenses(updateExpense)
    }
    

    const deleteHandler = (intialindex,amount) => {
        //console.log("intial index",intialindex);
        console.log(amount)
        const updateExpense = [ ...expenses];
        // console.log(updateExpense);
        updateExpense.splice(intialindex, 1);
        setExpenses(updateExpense);
        const totals = total-amount
        setTotal(totals);
        console.log(totals);
        
    }
   

    return (

        <div>
            <h1>Expense Tracker</h1>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} buttonhandler={deleteHandler} />
            <div>
                <Card className="expense-item expenses"> 
                    <div className=" expense-date" >
                        Total Expense
                    </div>
                    <div className="expense-item__price">
                      ₹{total}
                    </div>
                </Card>
            </div>
        </div>
    );
}
export default App;
