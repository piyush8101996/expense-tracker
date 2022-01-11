import React from 'react';
import './Expenses.css';
import Card from '../../UI/Card.js';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                props.item.map(
                    (expense,index )=> { return(
                        <ExpenseItem 
                            key={index}
                            date={ expense.date } 
                            title={ expense.title } 
                            amount={ expense.amount }
                            button={<button className="btn" onClick={()=>{
                             props.buttonhandler(index,expense.amount)
                            }}> Delete</button>} />
                    )
                        }
                )
            }

        </Card>
    );
}

export default Expenses;