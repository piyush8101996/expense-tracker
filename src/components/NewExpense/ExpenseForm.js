import React, { useState} from "react";

import  styles from'./ExpenseForm.module.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [titleerrormsg, setTitleerrormsg] = useState('');
    const [amounterrormsg, setAmounterrormsg] = useState('');
    const [daterrormsg, setDateerrormsg] = useState('');
   
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        setTitleerrormsg('')
        setAmounterrormsg('')
        setDateerrormsg('')
        
        if(!(enteredTitle)){
            setTitleerrormsg("Entered the Title of Expense")
            return 
        }else if(!(enteredAmount)){
            setAmounterrormsg("Entered the amount of Expense")
            return
        }else if(!(enteredDate)){
            setDateerrormsg("Entered the date of Expense")
            
            return
        }
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    

    return (
        <div>
            <div className={styles.newexpensecontrols}>
                <div className={styles.newexpensecontrol}>
                    <label>Title</label>
                    <input type="text"  value={enteredTitle} onChange={titleChangeHandler} /><br/>
                    <div className={styles.errormsg}>
                    {titleerrormsg}
                    </div>
                </div>
                <div className={styles.newexpensecontrol}>
                    <label>Amount</label>
                    <input type="number"  value={enteredAmount} min="0.01" step="0.01"  onChange={amountChangeHandler} /><br/>
                    <div className={styles.errormsg}>
                    {amounterrormsg}
                    </div>
                   
                </div>
                <div className={styles.newexpensecontrol}>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler} /><br/>
                    <div className={styles.errormsg}>
                    {daterrormsg}
                    </div>
                </div>
            </div>
            <div className={styles.newexpenseactions}>
                <button onClick={submitHandler} >Add Expense</button>
            </div>
            
            <div>
                
            </div>

        </div>
        
    );
}

export default ExpenseForm;